import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

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
               private router: Router,
               private authService: AuthService) { }

  agregarAutoria() {

    const { titulo, autor,  editorial }  = this.autoriaForm.value;

    this.authService.subirAutoria( titulo, autor, editorial)
      .subscribe( ok => {
        
      })
      
      console.log(this.autoriaForm.value);
      console.log(this.autoriaForm.valid);
   
  }

  siguiente() {

    this.router.navigateByUrl('/contacto');

  }

}
