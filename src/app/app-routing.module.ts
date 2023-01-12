import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { AdscripcionesComponent } from './protected/adscripciones/adscripciones.component';
import { AutoriaComponent } from './protected/autoria/autoria.component';
import { ContactoComponent } from './protected/contacto/contacto.component';
import { DesarrolloComponent } from './protected/desarrollo/desarrollo.component';
import { EstanciaComponent } from './protected/estancia/estancia.component';
import { GacademicoComponent } from './protected/gacademico/gacademico.component';
import { LibroComponent } from './protected/libro/libro.component';
import { ItecnologicaComponent } from './protected/itecnologica/itecnologica.component';
import { OgradoComponent } from './protected/ogrado/ogrado.component';
import { PatenteComponent } from './protected/patente/patente.component';
import { RevistaComponent } from './protected/revista/revista.component';
import { SniComponent } from './protected/sni/sni.component';
import { PproyectoComponent } from './protected/pproyecto/pproyecto.component';
import { IacademicaComponent } from './protected/iacademica/iacademica.component';
import { PcientificaComponent } from './protected/pcientifica/pcientifica.component';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path : 'dashboard',
    loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule),
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard] 
  },
  {
    path: 'adscripciones', component: AdscripcionesComponent 
  },
  {
    path: 'autoria', component: AutoriaComponent
  },
  {
    path: 'contacto', component: ContactoComponent
  },
  {
    path: 'desarrollo', component: DesarrolloComponent 
  },
  {
    path: 'estancia', component: EstanciaComponent 
  },
  {
    path: 'grado_academico', component: GacademicoComponent 
  },
  {
    path: 'imp_tecnologica', component: ItecnologicaComponent
  },
  {
    path: 'libro', component: LibroComponent
  },
  {
    path: 'obtencion_grado', component: OgradoComponent
  },
  {
    path: 'patentes', component: PatenteComponent
  },
  {
    path: 'revistas', component: RevistaComponent 
  },
  {
    path: 'sni', component: SniComponent 
  },
  {
    path: 'participacion_proyectos', component: PproyectoComponent 
  },
  {
    path: 'informacion_academica', component: IacademicaComponent 
  },
  {
    path: 'produccion_cientifica', component: PcientificaComponent 
  },
  {
    path: '**',
    redirectTo: 'auth'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
