import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

import { AdvocaciaModule } from '../advocacia/advocacia.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HomeComponent],
  
  imports: [
    
    AdvocaciaModule,
    SharedModule
  ]
})
export class HomeModule { }
