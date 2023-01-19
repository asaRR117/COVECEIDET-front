import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdscripcionesComponent } from './adscripciones/adscripciones.component';
import { AutoriaComponent } from './autoria/autoria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DesarrolloComponent } from './desarrollo/desarrollo.component';
import { DivulgacionComponent } from './divulgacion/divulgacion.component';
import { EstanciaComponent } from './estancia/estancia.component';
import { GacademicoComponent } from './gacademico/gacademico.component';
import { IacademicaComponent } from './iacademica/iacademica.component';
import { ItecnologicaComponent } from './itecnologica/itecnologica.component';
import { LibroComponent } from './libro/libro.component';
import { OgradoComponent } from './ogrado/ogrado.component';
import { PatenteComponent } from './patente/patente.component';
import { PcientificaComponent } from './pcientifica/pcientifica.component';
import { PproyectoComponent } from './pproyecto/pproyecto.component';
import { RevistaComponent } from './revista/revista.component';
import { SniComponent } from './sni/sni.component';
import { PinvestigacionComponent } from './pinvestigacion/pinvestigacion.component';


const routes: Routes = [
  {
    path: '',
      children: [
      { path: '', component: DashboardComponent },
      { path: '', component: AdscripcionesComponent },
      { path: '', component: AutoriaComponent },
      { path: '', component: ContactoComponent },
      { path: '', component: DesarrolloComponent },
      { path: '', component: DivulgacionComponent },
      { path: '', component: EstanciaComponent },
      { path: '', component: GacademicoComponent },
      { path: '', component: IacademicaComponent },
      { path: '', component: ItecnologicaComponent },
      { path: '', component: LibroComponent },
      { path: '', component: OgradoComponent },
      { path: '', component: PatenteComponent },
      { path: '', component: PcientificaComponent },
      { path: '', component: PproyectoComponent },
      { path: '', component: RevistaComponent },
      { path: '', component: SniComponent },
      { path: '', component: PinvestigacionComponent },
      { path: '**', redirectTo: ''},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
