import { Component, EventEmitter, OnInit, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { MatDrawer } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-home-layout',
  templateUrl: "./home.layout.component.html",
  styleUrls: ['./home.layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {
  ngOnInit(): void {
    //this.drawer.openedChange.subscribe((o : boolean) => window.alert(`${o}`));
  }
  private totalTransactions: number;
  private totalCertificates: number;
  private myCertificates:number;
  private isAdmin:boolean;
  @ViewChild('drawer') drawer : MatDrawer;
  private asd: EventEmitter<boolean> = new EventEmitter<boolean>();
constructor(private router: Router,
            private http: HttpClient,
            @Inject('BASE_URL') private baseUrl: string,
            private authService : AuthService){

              let header = this.authService.initAuthHeaders();
              let options = { headers: header };

             // authService.isAdmin().subscribe(_ => this.isAdmin = _);

              
              // this.http
              //     .get<number>(`${this.baseUrl}api/certificate/counttransaction`,options)
              //     .subscribe(result => this.totalTransactions = result);

              // this.http
              //     .get<number>(`${this.baseUrl}api/certificate/countcertificates`,options)
              //     .subscribe(result => this.totalCertificates = result);

              // this.http.get<number>(`${this.baseUrl}api/certificate/countusercertificates`,options).subscribe(result => {
              //     this.myCertificates = result;
              //     }, error => console.error(error)); 
}

public navigateToMyCertificates() {
  // this.authService.getUserInfo$().subscribe(_ => {

  //   this.router.navigate(['/fetch-data'], { queryParams: { username: _.data.userId } })
  //});
}

public onOpen(){

  let header = this.authService.initAuthHeaders();
  let options = { headers: header };

}

}
