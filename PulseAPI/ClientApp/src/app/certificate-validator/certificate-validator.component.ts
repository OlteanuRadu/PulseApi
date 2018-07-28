import { Component, Inject } from '@angular/core';
import { CertificateModel } from '../home/home.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ShipViewModel } from '../create-certificate/create-certificate.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AuthService } from '../auth/auth.service';
import { BadgeCountService } from '../services/badge.count.service';

@Component({
  selector: 'app-certificate-validator',
  templateUrl: './certificate-validator.component.html',
  styleUrls: ['./certificate-validator.scss']
})

export class CertificateValidatorComponent {
  private Title: string = "";
  private certificates: any;
  private isBusy:boolean = false;
  private isBusy1:boolean = false;
  private ships:ShipViewModel[];
  private selectedCertificate : any;
  private messageValidate:string;
  private selectedShip : ShipViewModel;

  constructor(private _http: HttpClient, @Inject('BASE_URL') private baseUrl: string,
              private authService: AuthService,
              private badgeCountService: BadgeCountService,
              private route: ActivatedRoute, private dialog: MatDialog) {

                let header = this.authService.initAuthHeaders();
                let options = { headers: header };

    this._http.get<CertificateModel[]>(`${baseUrl}api/certificate`,options).subscribe(result => {
           this.certificates = result;
         }, error => console.error(error));

       this._http.get<ShipViewModel[]>(`${baseUrl}api/certificate/ships`,options).subscribe(result => {
          this.ships = result;
        }, error => console.log(error)); 
  }

  displayCertificate =(item : any) => item.id;
  displayShipName = (ship: ShipViewModel) =>`${ship.shipName}`;


  public validateCertificatebyId(): void {

    let body = new FormData();
    body.append('certificateId', this.selectedCertificate.id);
    this.isBusy = true;
    this._http.post<boolean>(`${this.baseUrl}api/certificate/ValidateById`,body).subscribe(_ => {
     this.messageValidate=  _ == true ? "valid": "not valid";
     this.isBusy = false;
      let dialogRef = this.dialog.open(FileNameDialogComponent,{
        data:{
          result :`Certificate is ${this.messageValidate}`
        }
      });
      
      let header = this.authService.initAuthHeaders();
      let options = { headers: header };
      
      // this._http.get<number>(`${this.baseUrl}api/certificate/counttransaction`,options).subscribe(result => {
      //     this.badgeCountService.totalTransactions.next(result);
      // });
    });
  }
  
  public validateCertificatebyVesselId(): void{

    let body = new FormData();
    body.append('vesselId', this.selectedShip.id);
    this.isBusy1 = true;
    this._http.post<boolean>(`${this.baseUrl}api/certificate/ValidateByVesselId`,body).subscribe(_ => {
      this.messageValidate=  _ == true ? "valid": "not valid";
      this.isBusy1 = false;
 
       let dialogRef = this.dialog.open(FileNameDialogComponent,{
         data:{
           result :`Certificate is ${this.messageValidate} for ${this.selectedShip.shipName}`
         }
       });

       let header = this.authService.initAuthHeaders();
       let options = { headers: header };
       
       this._http.get<number>(`${this.baseUrl}api/certificate/counttransaction`,options).subscribe(result => {
           this.badgeCountService.totalTransactions.next(result);
       });
     });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl:'./dialog-overview-example-dialog.html'
})
export class FileNameDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

