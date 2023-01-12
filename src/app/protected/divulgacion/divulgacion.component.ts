import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divulgacion',
  templateUrl: './divulgacion.component.html',
  styles: [
  ]
})
export class DivulgacionComponent{

  nombre:string;
  autor:string;
  revista:string;
  fecha:string;
  termino:string;

  constructor() { 
    this.nombre="";
    this.autor="";
    this.revista="";
    this.fecha="";
    this.termino="";
  }

  guardar() {}

  siguiente() {}
  

}
