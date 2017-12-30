import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  isHovered: boolean; 
  logoURL = "assets/images/logo3.png"; 

  toggleOn() {
    this.isHovered = true; 
    return this.isHovered; 
  }

  toggleOff() {
    this.isHovered = false; 
    return this.isHovered; 
  }
  getLogo() {
    this.logoURL = this.isHovered ? "assets/images/logo4.png" : "assets/images/logo3.png"; 
    return this.logoURL; 
  }
  constructor() { }

  ngOnInit() {
  }

}
