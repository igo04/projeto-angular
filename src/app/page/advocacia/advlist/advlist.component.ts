import { Component, OnInit } from '@angular/core';

import { FirebaseService } from 'src/app/servico/firebase.service';

@Component({
  selector: 'app-advlist',
  templateUrl: './advlist.component.html',
  styleUrls: ['./advlist.component.css']
})
export class AdvlistComponent implements OnInit{

  imagens = [];  

  constructor(private fs: FirebaseService){}
  
  ngOnInit(): void {
    //Observable do JS
      this.fs.consultaDados().subscribe(caixinha => this.imagens = caixinha);      
  }

 
  excluir(id){
    this.fs.excluirDados(id);
    alert('Foto Excluida');
  }



  

}
