import { Component, AfterViewInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  //title = 'app';
  constructor(private ToasterService: ToasterService){

  }

  ngAfterViewInit(): void {
    this.ToasterService.popAsync('success', 'Welcome', 'Phone Hazard is ready to be used.');
  }
}
