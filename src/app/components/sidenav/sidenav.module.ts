import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatCardModule, MatInputModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,

  ]
})
export class SidenavModule { }
