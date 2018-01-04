import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private http: Http) {
    this.currentURL = window.location.href;
    this.pathArray = this.currentURL.split('/')
  }
  ngOnInit() { }

  // Variables 
  title = 'MuseBuds';
  bg1 = "url('assets/images/dance2.jpeg')"
  bg2 = "url('assets/images/bg2.png')"
  isHome: boolean
  currentURL = '';
  pathArray = [];

  onClick() {
    this.currentURL = window.location.href;
    this.pathArray = this.currentURL.split('/')
    this.changeBG()
  }
  changeBG() {
    if (this.pathArray[3] === "login" || this.pathArray[3] === "")
      return this.bg1
    else if (this.pathArray[3] === "profile")
      return "";
    else
      return this.bg2
  }

}
