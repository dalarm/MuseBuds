import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  ngOnInit(){}

  @Input() isHome : boolean;

  toggleForm(){
    console.log(this.isHome)
    if(this.isHome === false){
      let login = document.getElementById("login")
      login.style.display = "none";
    }
  }

}
