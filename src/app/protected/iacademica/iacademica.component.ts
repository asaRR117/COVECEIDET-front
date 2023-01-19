import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-iacademica',
  templateUrl: './iacademica.component.html',
  styles: [
  ]
})
export class IacademicaComponent {

  iacademicaForm: FormGroup = this.fb.group({
    nivel:['', Validators.required],
    titulo: ['', Validators.required],
    institucion: ['', Validators.required],
    year: ['', Validators.required]
  });


  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService) { 
    
  }

  subirIacademica() {

    const { nivel, titulo, institucion, year } = this.iacademicaForm.value;

    console.log(this.iacademicaForm.value);
    console.log(this.iacademicaForm.valid);

    this.authService.subirIacademica( nivel, titulo, institucion, year )
      .subscribe( ok => {

      })
  }

  siguiente() {

    this.router.navigateByUrl('/implementacion_tecnologica')
  }


}
