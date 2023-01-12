import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revista',
  templateUrl: './revista.component.html',
  styles: [
  ]
})
export class RevistaComponent {

  titulo: string;
  autor: string;
  fecha: string;
  aceptacion: string;
  nombre: string;

  constructor() {
    this.titulo= "";
    this.autor= "";
    this.fecha= "";
    this.aceptacion= "";
    this.nombre= "";
   }


   guardar() {}

   siguiente() {}
}
