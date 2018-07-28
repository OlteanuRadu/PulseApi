import {  Inject, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { BadgeCountService } from '../services/badge.count.service';
import * as signalR from '@aspnet/signalr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  ngOnInit() {
    let connection = new signalR.HubConnectionBuilder()
    .withUrl(`${this.baseUrl}exchange`)
    .build();
 
connection.on("send", data => {
    console.log(data);
});
 
connection.start()
    .then(() =>{
      console.log("Connected")
    });
  }

  private certificates: CertificateModel[];
  private showUserProfile: boolean = false; 
  private usercontext : any;

  constructor(private httpClient: HttpClient, 
    @Inject('BASE_URL') private baseUrl: string,
    private authService: AuthService,
    private badgeService : BadgeCountService,
    private router: Router) { 
    // this.authService.getUserInfo$().subscribe(_ => {
    //   this.usercontext = _.data.userName;
    // });
  }

  downloadFile(data: Response) {
    var blob = new Blob([data], { type: 'text/pdf' });
    var url = window.URL.createObjectURL(blob);
    window.open(url);
  }

  public userClick() : void {
this.showUserProfile = !this.showUserProfile;
  }

  public getAllCertificates = () => this.httpClient
    .get<CertificateModel[]>(`${this.baseUrl}api/certificate`)
    .subscribe(_ => this.certificates = _);

  public getCertificateById = (id: string) => {
    var win = window.open(`${this.baseUrl}api/certificate/1`, "_blank");
    win.focus();
  }
  public navigateToMyCertificates(): void {
    var username = JSON.parse(localStorage.getItem('currentUser')).username;
    //var user = JSON.parse(currentUser.id).username;
    this.router.navigate(['/fetch-data'], { queryParams: { username: username } });
  }

  public navigateToAllCertificates(): void {
    this.router.navigate(['/fetch-data']);
  }
  public navigateToAllTransactions():void{
    this.router.navigate(['/transactions']);
  }

  public validateCertificate(): void {
    this.router.navigate(['/certificate-validator']);
  }

  public createCertificate(): void{
    this.router.navigate(['/create-certificate']);
  }

  public subscribe(): void {
    
    let header = this.authService.initAuthHeaders();
    let options = { headers: header };
    let body = JSON.stringify({ "Recipients": "olteanurd@gmail.com", "Subject": "Hello","MessageBodyText" : "Hellooo" });
    this.httpClient.post<any>(`${this.baseUrl}api/Exchange/Subscribe`,options).subscribe(result => {
      let res= result;
     }, error => console.error(error));

  }

  public startGenesis(): void {

    let header = this.authService.initAuthHeaders();
    let options = { headers: header };
    let body = JSON.stringify({ "Recipients": "olteanurd@gmail.com", "Subject": "Hello","MessageBodyText" : "Hellooo" });
    this.httpClient.post<any>(`${this.baseUrl}api/Exchange/Email`,body,options).subscribe(result => {
      let res= result;
     }, error => console.error(error));

  };
  public logout():void{
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}

export class CertificateModel {
  public customerIdentifier: string;
  public blockType: string;

}
