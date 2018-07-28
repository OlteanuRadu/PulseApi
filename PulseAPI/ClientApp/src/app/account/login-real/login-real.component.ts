import { Component, OnInit,OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-login-real',
    templateUrl: './login-real.component.html',
    styleUrls: ['./login-real.component.scss']
  })


  export class LoginRealComponent {

    private email:string;
    private password:string;
    private  loading = false;
    private showError = false;
    private hide = true;
    private error = "";
    constructor(private router: Router,private authenticationService: AuthService){}

    private onCancel(){
this.router.navigate(['/']);
    }

    private login(){
        this.loading=true;
        this.showError = false;
        this.authenticationService.login(this.email, this.password)
        .subscribe(
            result => {
              if (result.state == 1) {
                  this.router.navigate(["/"]);
              } else {
                  alert(result.msg);
              }
            },
            error => {
                this.error = error;
                this.loading = false;
                this.showError = true;
            });
    }
  }