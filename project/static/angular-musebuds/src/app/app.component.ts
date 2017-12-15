import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url : string = 'http://localhost:8000/accounts/profiles/'

  constructor(private http: Http){}

  public getProfiles(){
    this.http.get(this.url).toPromise().then((res)=>{
      console.log(res.json());
    });
  }
  
  getURL() {
    return "url('assets/images/dance2.jpeg')"; 
  }
}
