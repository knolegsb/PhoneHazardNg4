import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToasterModule } from 'angular2-toaster';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { AppRoutingModule } from './app.routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductModule } from "app/product/product.module";
import { HttpModule } from "@angular/http";
//import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ToasterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
