import { Component } from '@angular/core';
import {Maptastic} from 'maptastic'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maptastictest';
  
  
  maptasticMode() {
    Maptastic('maptastic_element')
  }
}
