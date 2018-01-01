import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'


interface ProfileData {
  name: string;
  gender: string;
  description: string;
  profilePic: string;
  focus: Array<{ sk: string, sk2: string, sk3: string }>;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user: ProfileData;
  results: Array<ProfileData>;
  data: any = null;
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

  ngOnInit(): void {
    this.http.get(this.url)
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.data = data;
        this.results = data.results;
        this.user = this.results[0];
        console.log('Name: ' + this.user.name);
        console.log('Gender :' + this.user.gender);
        console.log('Picture :' + this.user.profilePic);
        console.log(this.user.focus);
        console.log('Description : ' + this.user.description);
      });
  }

  onClick() {
    this.currentURL = window.location.href;
    this.pathArray = this.currentURL.split('/')
    this.changeBG()
  }

  public getProfiles() {
    this.http.get(this.url).subscribe(data => {
      console.log(data);
    });
  }
  changeBG() {
    if (this.pathArray[3] === "login" || this.pathArray[3] === "")
      return this.bg1
    else if(this.pathArray[3] === "profile")
      return ""; 
    else
      return this.bg2
  }

}
