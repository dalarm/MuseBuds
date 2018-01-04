import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

@Injectable()
export class ProfileService {

    constructor(private http: Http) { }

    // Variables 
    url: string = 'http://localhost:8000/accounts/'

    // Functions 
    public getProfiles() {
        return this.http.get(this.url)
            .map((res: Response) => res.json())
    }
}