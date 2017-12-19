import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  ngOnInit(){}
  @Input() pathArray = [];
  
  toggleForm(){
    if(this.pathArray[3] != "#"){
      let login = document.getElementById("login")
      login.style.display = "none";
    }
  }

}
