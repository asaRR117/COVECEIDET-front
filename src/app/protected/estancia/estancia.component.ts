import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estancia',
  templateUrl: './estancia.component.html',
  styles: [
  ]
})
export class EstanciaComponent {

  institucion:string;
  proyecto:string;
  fecha:string;
  termino:string;

  constructor() {
    this.institucion="";
    this.proyecto="";
    this.fecha="";
    this.termino="";
   }

   guardar () {}

   siguiente() {}
   
}
