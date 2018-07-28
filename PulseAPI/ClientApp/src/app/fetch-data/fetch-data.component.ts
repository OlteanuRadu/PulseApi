import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.scss']
})
export class FetchDataComponent {
  public forecasts: CertificateModel[];
  displayedColumns = ['customerIdentifier', 'vesselIdentifier', 'startDate', 'endDate','button1'];
  private Title: string;
  private isBusy:boolean = true;
  private baseUrl : string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, 
              private route: ActivatedRoute, 
              private authService: AuthService) { 
    //http.get<CertificateModel[]>(baseUrl + 'api/certificate/').subscribe(result => {
    //  this.forecasts = result;
    //}, error => console.error(error));
    this.baseUrl = baseUrl;

    this.route.queryParams.subscribe(_ => {
      this.isBusy = true;
      if (_.username != undefined) {
        let header = this.authService.initAuthHeaders();
        let options = { headers: header };
        this.Title = "My Certificates";
        http.get<CertificateModel[]>(baseUrl+'api/certificate/'+_.username,options).subscribe(result => {
          this.forecasts = result;
          this.isBusy= false;
        }, error => console.error(error)); 
      }
      else {
        this.Title = "All Certificates";
        let header = this.authService.initAuthHeaders();
        let options = { headers: header };
        http.get<CertificateModel[]>(baseUrl +'api/certificate/',options).subscribe(result => {
           this.forecasts = result;
           this.isBusy = false;
         }, error => console.error(error));
      }
      let header = this.authService.initAuthHeaders();
        let options = { headers: header };

        // http.get<number>(`${baseUrl}api/certificate/counttransaction`,options).subscribe(result => {
        //     this.badgeCountService.totalTransactions.next(result);
        // });
    });
  }

  public getCertificateById = (selectedItem: CertificateModel) => {

    var item = {"CustomerIdentifier": selectedItem.customerIdentifier, "VesselIdentifier": selectedItem.vesselIdentifier};
    var win = window.open(`${this.baseUrl}api/certificate/download/` +selectedItem.customerIdentifier);
    win.focus();
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

 interface CertificateModel {
   customerIdentifier: string;
   vesselIdentifier: string;
   startDate: Date;
   endDate: Date;
}
