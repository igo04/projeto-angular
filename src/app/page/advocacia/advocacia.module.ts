//Modulo de serviço - Junta componentes com a mesma função
import { NgModule } from '@angular/core';


import { AdvComponent } from './adv/adv.component';
import { FormupdateComponent } from './formupdate/formupdate.component';
import { AdvformComponent } from './advform/advform.component';

import { AdvlistComponent } from './advlist/advlist.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        
        FormupdateComponent,
        
    ],

    imports: [
        
        AppRoutingModule,
        SharedModule
    ],

    exports: []
})

export class AdvocaciaModule{}