
import { Component, OnInit,OnDestroy,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

@Component({
    selector: 'app-register-account',
    templateUrl: './registration-account.component.html',
    styleUrls: ['./registration-account.component.scss']
  })

  export class RegisterAccountComponent{

    private accountName : string;
    private accountPassword:string;
    private hide = true;
    private loading :boolean = false;
    constructor(private router: Router,
                private http: HttpClient,
                @Inject('BASE_URL') private baseUrl: string){

    }

    public onCancel(){
        this.router.navigate(["/"]);
    }

    public createAccount(){
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        let options = { headers: header };
        let body = JSON.stringify({ "Email": this.accountName, "PasswordHash": this.accountPassword });
        this.loading = true;
         this.http.post<any>(`${this.baseUrl}api/account/register`, body,options)
            .subscribe(_ => {
                this.loading = false;
                let res = _;
            },err => {
                this.loading = false;
                
            });
    }
  }