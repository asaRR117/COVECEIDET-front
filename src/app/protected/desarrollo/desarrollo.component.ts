import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-desarrollo',
  templateUrl: './desarrollo.component.html',
  styles: [
  ]
})
export class DesarrolloComponent {

  desarrolloForm: FormGroup = this.fb.group({
    area: ['', Validators.required],
    campo: ['', Validators.required],
    disciplina: ['', Validators.required],
    ques1: ['', Validators.required],
    ques2: ['', Validators.required],
    ques3: ['', Validators.required],
    ques4: ['', Validators.required]
  });
  

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService) {  }


  subirDesarrollo() {

    console.log(this.desarrolloForm.value);
    console.log(this.desarrolloForm.valid);
    const { area, campo, disciplina, ques1, ques2, ques3, ques4 } = this.desarrolloForm.value;

    this.authService.subirDesarrollo( area, campo, disciplina, ques1, ques2, ques3, ques4)
      .subscribe( ok => {

      })
  }

  siguiente() {

    this.router.navigateByUrl('/divulgacion');
  }

}
