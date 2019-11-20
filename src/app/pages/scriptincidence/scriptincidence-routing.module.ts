import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScriptincidenceComponent } from './scriptincidence.component';


const routes: Routes = [{path: '', component: ScriptincidenceComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScriptincidenceRoutingModule { }
