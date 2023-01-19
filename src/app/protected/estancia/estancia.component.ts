import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { Estancia } from '../../auth/interfaces/auth-interfaces';

@Component({
  selector: 'app-estancia',
  templateUrl: './estancia.component.html',
  styles: [
  ]
})
export class EstanciaComponent {

  estanciaForm: FormGroup = this.fb.group({
    institucion: ['', Validators.required],
    proyecto: ['', Validators.required],
    finicio: ['', Validators.required],
    ftermino: ['', Validators.required]
  });
 

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService) {}

  subirEstancia() {

    console.log(this.estanciaForm.value);
    console.log(this.estanciaForm.valid);

    const {institucion, proyecto, finicio, ftermino} = this.estanciaForm.value;

    this.authService.subirEstancia( institucion, proyecto, finicio, ftermino)
      .subscribe( ok => {

      })
  }

  siguiente() {

    this.router.navigateByUrl('/grado_academico');
  }

}