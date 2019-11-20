import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScriptIncidenceComponent } from './script-incidence.component';

const routes: Routes = [{path: '', component: ScriptIncidenceComponent}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScriptIncidenceRoutingModule { }
