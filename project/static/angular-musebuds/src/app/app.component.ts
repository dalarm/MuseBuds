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
  url: string = 'http://localhost:8000/accounts/'
  bg1 = "url('assets/images/dance2.jpeg')"
  bg2 = "url('assets/images/bg2.png')"
  isHome: boolean
  currentURL = '';
  pathArray = [];
  constructor(private http: Http) {
    this.currentURL = window.location.href;
    this.pathArray = this.currentURL.split('/')
  }

  onClick() {
    this.currentURL = window.location.href;
    this.pathArray = this.currentURL.split('/')
    this.changeBG()
  }

  public getProfiles() {
    this.http.get(this.url).toPromise().then((res) => {
      console.log(res.json());
    });
  }
  changeBG() {
    if (this.pathArray[3] === "login" || this.pathArray[3] === "")
      return this.bg1
    else
      return this.bg2
  }

}
