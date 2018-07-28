import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {
    private tokeyKey = "token";
    constructor(private http: HttpClient,@Inject('BASE_URL') private baseUrl: string) {}
    
    login(username: string, password: string) {
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        let options = { headers: header };
        let body = JSON.stringify({ "Email": username, "PasswordHash": password });
        return this.http.put<AuthBearer>(`${this.baseUrl}api/account/login`, body,options)
            .pipe(map((res:any) => {
                let result = res;
                // login successful if there's a jwt token in the response
                if (result.state && result.state == 1) {
                    sessionStorage.setItem('tokenKey', result.data.accesToken);
                }
                return result;
            }));
    }
    private getLocalToken(): string {
        return sessionStorage.getItem('tokenKey');
    }

    public isAdmin():Observable<boolean> {
       return this.getUserInfo$().pipe(map((res:any) => {
           return res.data.userName == "rolteanu" ? true:false;
       }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        sessionStorage.clear();
    }

    public initAuthHeaders(): HttpHeaders {
        let token = this.getLocalToken();
        if (token == null) throw "No token";

        let headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set("Authorization", "Bearer " + token);
        return headers;
    }

    public authGet$(url) {
        let header = this.initAuthHeaders();
        let options = { headers: header };
        return this.http.get<any>(url, options).pipe(
            debounceTime(200),
            distinctUntilChanged(),
            catchError(this.handleError<any>("authGet")));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(`${operation} error: ${error.message}`);
            return of(result as T);
        };
    }

    public getUserInfo$() {
        return this.authGet$(`${this.baseUrl}api/TokenAuth`);
    }

}
export interface AuthBearer{
    state : number;
    msg : string;
    data : any;
}
