import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-pinvestigacion',
  templateUrl: './pinvestigacion.component.html',
  styles: [
  ]
})
export class PinvestigacionComponent {

  pinvestigacionForm: FormGroup = this.fb.group({
    referencia: ['', Validators.required],
    titulo: ['', Validators.required],
    particion: ['', Validators.required],
    finicio: ['', Validators.required],
    ftermino: ['', Validators.required],
    area: ['', Validators.required],
    iprincipal: ['', Validators.required],
    iasociadas: ['', Validators.required],
    monto: ['', Validators.required],
    pderivados: ['', Validators.required],
    usuarios: ['', Validators.required]
    });

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService) { }

  
  subirPinvestigacion() {

    console.log(this.pinvestigacionForm.value);
    const {referencia, titulo, particion, finicio, ftermino, area, iprincipal, iasociadas, monto, pderivados, usuarios} = this.pinvestigacionForm.value;
    
    this.authService.subirPinvestigacion( referencia, titulo, particion, finicio, ftermino, area, iprincipal, iasociadas, pderivados, monto, usuarios )
      .subscribe( ok => {

      })
 
  }


  siguiente() {

    this.router.navigateByUrl('/participacion_proyectos');
  }
 

}
