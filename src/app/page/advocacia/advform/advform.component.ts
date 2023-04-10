import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FirebaseService } from '../../../servico/firebase.service';

@Component({
  selector: 'app-advform',
  templateUrl: './advform.component.html',
  styleUrls: ['./advform.component.css']
})
export class AdvformComponent implements OnInit{

  formDataDriven!: FormGroup;
  
  
  
  constructor(
    private marcos: FormBuilder, 
    private fs: FirebaseService,   
    ){}

 
  ngOnInit(): void {   
    
    this.validaForm();    
        
  }

  
  validaForm(){
    this.formDataDriven = this.marcos.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      url: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.maxLength(255)]]
    })
  }
  
 
  cadastrar(){

    try {
      this.fs.cadastrarDados(this.formDataDriven.value);
      alert("Foto cadastrada!");
    }catch(err) {
      console.log(err);
    }
  }
}
