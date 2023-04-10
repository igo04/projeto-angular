import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LoginModule { }
