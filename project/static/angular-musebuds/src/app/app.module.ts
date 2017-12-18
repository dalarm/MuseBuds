import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    LoginComponent, 
    AboutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
