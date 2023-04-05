import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdvocaciaModule } from '../advocacia/advocacia.module';


@NgModule({
  declarations: [HomeComponent],
  
  imports: [
    CommonModule,
    BrowserModule,
    AdvocaciaModule
  ]
})
export class HomeModule { }
