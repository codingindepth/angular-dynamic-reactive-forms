import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ProductFeatureComponent} from './products/product-feature.component';

@NgModule({
  imports:      [  
      BrowserModule,
      FormsModule, 
      ReactiveFormsModule],
  declarations: [ AppComponent,ProductFeatureComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
