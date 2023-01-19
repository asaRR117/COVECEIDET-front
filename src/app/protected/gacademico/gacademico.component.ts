import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-gacademico',
  templateUrl: './gacademico.component.html',
  styles: [
  ]
})
export class GacademicoComponent {

  gacademicoForm: FormGroup = this.fb.group({
    nivel: ['', Validators.required],
    titulo: ['', Validators.required],
    institucion: ['', Validators.required],
    year: ['', Validators.required]
  });

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService) {}
  
  subirGacademico() {

    console.log(this.gacademicoForm.value);
    console.log(this.gacademicoForm.valid);

    const { nivel, titulo, institucion, year } = this.gacademicoForm.value;

    this.authService.subirGacademico( nivel, titulo, institucion, year )
      .subscribe( ok => {

      })
  }

  siguiente() {

    this.router.navigateByUrl('/implementacion_tecnologica');
  }
 

}
