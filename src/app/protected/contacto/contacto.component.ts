import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: [
  ]
})
export class ContactoComponent {

  email: String;
  emailInst: String;
  phone: String;
  movil: String;
  institucion: String;
  adscipcion: String;

  constructor() { 
    this.email = "";
    this.emailInst = "";
    this.phone = "";
    this.movil = "";
    this.institucion = "";
    this.adscipcion = "";
  }

guardar() {}

siguiente() {}


}
