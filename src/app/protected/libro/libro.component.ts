import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styles: [
  ]
})
export class LibroComponent {

  titulo: string;
  autor: string;
  editorial: string;
  referencia: string;

  constructor() { 
    this.titulo="";
    this.autor="";
    this.editorial="";
    this.referencia="";
  }

  guardar() {}

  siguiente() {}
  
  
}
