import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: [
  ]
})
export class ContactoComponent {

  contactoForm: FormGroup = this.fb.group({
    correop: ['', [Validators.required, Validators.email]],
    correoins: ['', [Validators.required, Validators.email]],
    numero: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
  });


  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService ) { } 
    
guardarContacto() {

  const { correop, correoins, numero } = this.contactoForm.value;

  console.log(this.contactoForm.value);
  console.log(this.contactoForm.valid);


  this.authService.subirContacto( correop, correoins, numero )
    .subscribe( ok => {

    })
}

siguiente() {

  this.router.navigateByUrl('/desarrollo');
}


}
