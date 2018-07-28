import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class BadgeCountService {

    public totalTransactions : Subject<number> = new Subject<number>();
    public totalCertificates : Subject<number> = new Subject<number>();
    public myCertificates : Subject<number> = new Subject<number>();
}