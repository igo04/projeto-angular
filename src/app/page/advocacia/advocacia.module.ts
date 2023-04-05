//Modulo de serviço - Junta componentes com a mesma função
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AdvComponent } from './adv/adv.component';
import { FormupdateComponent } from './formupdate/formupdate.component';
import { AdvformComponent } from './advform/advform.component';

import { AdvlistComponent } from './advlist/advlist.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
    declarations: [
        
        FormupdateComponent,
        
    ],

    imports: [
        ReactiveFormsModule,
        BrowserModule,
        CommonModule,
        AppRoutingModule
    ],

    exports: []
})

export class AdvocaciaModule{}