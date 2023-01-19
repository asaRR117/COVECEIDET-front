import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styles: [
  ]
})
export class LibroComponent {

  libroForm: FormGroup = this.fb.group({
    titulo: ['',Validators.required],
    autor: ['',Validators.required],
    editorial: ['',Validators.required],
    referencia: ['',Validators.required]
  });

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService) { }
   
  subirLibro() {

    const  { titulo, autor, editorial, referencia } = this.libroForm.value;

    console.log(this.libroForm.value);
    console.log(this.libroForm.valid);

    this.authService.subirLibro( titulo,autor, editorial, referencia )
     .subscribe( ok => {

      
     })

  }

  siguiente() {}
  
  
}
