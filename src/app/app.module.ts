import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';


import { AppComponent } from './app.component';
import {Maptastic} from 'maptastic'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  OnInit(){
    Maptastic('app')
  }
}
