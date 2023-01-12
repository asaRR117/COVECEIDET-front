import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iacademica',
  templateUrl: './iacademica.component.html',
  styles: [
  ]
})
export class IacademicaComponent {

  institucion: string;
  titulo: string;

  constructor() { 
    this.institucion= "";
    this.titulo= "";
  }

  aceptar() {}

  siguiente() {}


}
