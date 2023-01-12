import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miRegisterForm: FormGroup = this.fb.group({
    email: [ '', [Validators.required, Validators.email]],
    name: [ '', [Validators.required]],
    apellidos: [ '', Validators.required],
    rfc: [ '', [Validators.required, Validators.minLength(13)]],
    password: [ '', [Validators.required, Validators.minLength(8)]]
  })

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService) { }

  registro() {
    console.log(this.miRegisterForm.value);

    //const errores = this.miRegisterForm.value;

    //console.log(errores);

    
    const { email, name, apellidos, rfc, password } = this.miRegisterForm.value;

    this.authService.registro( email, name, apellidos, rfc, password)
      .subscribe( ok => {
       console.log(ok)     

        
        if ( ok === true) {
          this.router.navigateByUrl('/dashboard');
        } else {
          // Mostrar mensaje de error
          Swal.fire (
            'Error',
            ok,
            'error'
          )
        }      
      } );
  }


}
