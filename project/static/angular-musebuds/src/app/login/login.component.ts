import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input('pathArray') pathArray = [];
  
}
