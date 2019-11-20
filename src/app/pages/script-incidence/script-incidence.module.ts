import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  MatSidenavModule, MatButtonModule, MatMenuModule, MatCardModule, MatInputModule, MatToolbarModule, MatListModule, MatTableModule, MatPaginatorModule, MatIcon, MatIconModule } from '@angular/material';

import { ScriptIncidenceRoutingModule } from './script-incidence-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../login/login.module';
import { HttpClient } from 'selenium-webdriver/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScriptIncidenceRoutingModule,
    HttpClientModule,
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
    TranslateModule.forRoot({

      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    }),
  ]
})
export class ScriptIncidenceModule {




}
