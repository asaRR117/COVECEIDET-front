import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-divulgacion',
  templateUrl: './divulgacion.component.html',
  styles: [
  ]
})
export class DivulgacionComponent{

  divulgacionForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    revista: ['',  Validators.required],
    autor: ['', Validators.required],
    faceptacion: ['', Validators.required],
    fpublicacion: ['', Validators.required]
  });

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService) { }
    

  subirDivulgacion() {

    console.log(this.divulgacionForm.value);
    const { nombre, revista, autor,  faceptacion, fpublicacion } = this.divulgacionForm.value;

    this.authService.subirDivulgacion( nombre, revista, autor, faceptacion, fpublicacion )
      .subscribe( ok => {
        
      });
  }

  siguiente() {

    this.router.navigateByUrl('/estancia');
  }
  

}