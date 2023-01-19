import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdscripcionesComponent } from './adscripciones/adscripciones.component';
import { DivulgacionComponent } from './divulgacion/divulgacion.component';
import { EstanciaComponent } from './estancia/estancia.component';
import { GacademicoComponent } from './gacademico/gacademico.component';
import { OgradoComponent } from './ogrado/ogrado.component';
import { LibroComponent } from './libro/libro.component';
import { PatenteComponent } from './patente/patente.component';
import { RevistaComponent } from './revista/revista.component';
import { SniComponent } from './sni/sni.component';
import { AutoriaComponent } from './autoria/autoria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DesarrolloComponent } from './desarrollo/desarrollo.component';
import { ItecnologicaComponent } from './itecnologica/itecnologica.component';
import { PproyectoComponent } from './pproyecto/pproyecto.component';
import { IacademicaComponent } from './iacademica/iacademica.component';
import { PcientificaComponent } from './pcientifica/pcientifica.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PinvestigacionComponent } from './pinvestigacion/pinvestigacion.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AdscripcionesComponent,
    DivulgacionComponent,
    EstanciaComponent,
    GacademicoComponent,
    OgradoComponent,
    LibroComponent,
    PatenteComponent,
    RevistaComponent,
    SniComponent,
    AutoriaComponent,
    ContactoComponent,
    DesarrolloComponent,
    ItecnologicaComponent,
    PproyectoComponent,
    IacademicaComponent,
    PcientificaComponent,
    PinvestigacionComponent,
    
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProtectedModule { }
