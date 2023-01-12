import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ogrado',
  templateUrl: './ogrado.component.html',
  styles: [
  ]
})
export class OgradoComponent {

  nombre:string;
  institucion:string;
  
  constructor() { 
    this.nombre="";
  this.institucion="";
  }

  guardar() {}

  siguiente() {}

}
