import {  Inject, Component } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

 @Component({
    selector: 'app-transactions',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
  })

  export class UsersComponent {

    private isBusy= true;
    private users : IUser[];
    private displayedColumns = ['userName','email'];
    private Title = "Users";

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, 
    private route: ActivatedRoute, 
    private authService: AuthService)
    {
        let header = this.authService.initAuthHeaders();
        let options = { headers: header };
        http.get<IUser[]>(baseUrl +'api/user/users',options).subscribe(result => {
           this.users = result;
           this.isBusy = false;
         }, error => console.error(error));
    }
  }


  export interface IUser{
      id:string;
       email: string;
       userName : string;
  }