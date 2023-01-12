import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autoria',
  templateUrl: './autoria.component.html',
  styles: [
  ]
})
export class AutoriaComponent{

  autoriaForm: FormGroup = this.fb.group({
    titulo: ['', Validators.required],
    autor: ['', Validators.required],
    editorial: ['', Validators.required]
  });

  constructor( private fb: FormBuilder,
               private router: Router) { }

  agregar() {

    const { titulo, autor,  editorial }  = this.autoriaForm.value;
    
  }

  siguiente() {}

}
