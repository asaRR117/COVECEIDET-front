import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-itecnologica',
  templateUrl: './itecnologica.component.html',
  styles: [
  ]
})
export class ItecnologicaComponent  {

  itecnologicaForm: FormGroup = this.fb.group({
    tipo: ['',Validators.required],
    producto: ['',Validators.required],
    registro: ['',Validators.required],
    fregistro: ['',Validators.required]
  });

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService) { }


  subirItecnologica() {

    const { tipo, producto, registro, fregistro } = this.itecnologicaForm.value;

    console.log(this.itecnologicaForm.value);
    console.log(this.itecnologicaForm.valid);

    this.authService.subirItecnologica( tipo, producto, registro, fregistro) 
      .subscribe( ok => {


      })
  }

  siguiente() {

    this.router.navigateByUrl('/libro');
  }

}
