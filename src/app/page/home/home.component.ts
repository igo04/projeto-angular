import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticarService } from 'src/app/servico/autenticar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  imagemHome = "https://cdn.pixabay.com/photo/2014/04/03/10/45/hammer-311342_960_720.png";

  constructor(
    private autenticar: AutenticarService,
    private router: Router
  ){}


   //delogar
   deslogar(){
    this.autenticar.logout();
    this.router.navigate(['']);

  }
}
