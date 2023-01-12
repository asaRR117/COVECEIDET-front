import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gacademico',
  templateUrl: './gacademico.component.html',
  styles: [
  ]
})
export class GacademicoComponent {

  titulo:string;
  institucion:string;

  constructor() { 
    this.titulo="";
    this.institucion="";

  }
  
  guardar() {}

  siguiente() {}
 

}
