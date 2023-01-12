import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdscripcionesComponent } from './adscripciones/adscripciones.component';


const routes: Routes = [
  {
    path: '',
      children: [
      { path: '', component: DashboardComponent },
      { path: '', component: AdscripcionesComponent },
      { path: '**', redirectTo: ''},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
