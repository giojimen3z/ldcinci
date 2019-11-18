import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { ProjectsComponent } from './pages/projects/projects.component';


const routes: Routes = [
{
  path: '',
  loadChildren: () =>
    import('./pages/login/login.module').then(
      m => m.LoginModule
    )
},
{
  path: 'register',
  loadChildren: () =>
    import('./pages/register/register.module').then(
      m => m.RegisterModule
    )
},
{path: 'sidenav', component: SidenavComponent, children: [
  {
    path: '',
    loadChildren: () =>
      import('./pages/projects/projects.module').then(
        m => m.ProjectsModule
      )
   },
    {
    path: 'projects',
    loadChildren: () =>
      import('./pages/projects/projects.module').then(
        m => m.ProjectsModule
      )
   },
   {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        m => m.RegisterModule
      )
   }
]
}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), SidenavModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
