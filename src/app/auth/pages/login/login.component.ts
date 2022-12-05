import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  miLoginForm: FormGroup = this.fb.group({
    email: [ '', [Validators.required, Validators.email ]],
    password: [ '', [Validators.required, Validators.minLength(8)]],
    rfc: [ '', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]]
  });


  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService ) { }

  login() {
  
    console.log(this.miLoginForm.value);
    const { email, password, rfc } = this.miLoginForm.value;
     
    this.authService.login( email, password, rfc )
      .subscribe( ok => {
       console.log(ok)
        if ( ok === true) { 
          this.router.navigateByUrl('/dashboard');
        } else {
          // ToDo: Mostrar mensaje de error
          Swal.fire (
            'Error',
            ok,
            'error'
          )
        }
      });
      
    
    
  }

}
