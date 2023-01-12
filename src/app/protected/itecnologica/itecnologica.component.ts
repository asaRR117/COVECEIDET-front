import { Component } from '@angular/core';

@Component({
  selector: 'app-itecnologica',
  templateUrl: './itecnologica.component.html',
  styles: [
  ]
})
export class ItecnologicaComponent  {

  tipo:string;
  nombre:string;
  numero:string;
  fecha:string;

  constructor() { 
    this.tipo="";
    this.nombre="";
    this.numero="";
    this.fecha="";
  }


  guardar() {}

  siguiente() {}

}
