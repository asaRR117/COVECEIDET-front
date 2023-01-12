import { Component } from '@angular/core';

@Component({
  selector: 'app-patente',
  templateUrl: './patente.component.html',
  styles: [
  ]
})
export class PatenteComponent {

  tipo: string;
  nombre: string;
  registro:string;
  fecha:string;
  referencia:string;

  constructor() {
    this.tipo="";
    this.nombre="";
    this.registro="";
    this.fecha="";
    this.referencia="";
  }

  guardar() {}

  siguiente() {}

}
