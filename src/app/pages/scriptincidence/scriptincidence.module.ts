import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScriptincidenceRoutingModule } from './scriptincidence-routing.module';
import { ScriptincidenceComponent } from './scriptincidence.component';
import {  MatIconModule, MatCardModule,  MatToolbarModule, MatPaginatorModule } from '@angular/material';
/* Translate */
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
export function HttpLoaderFactory(http: HttpClient){

    return new TranslateHttpLoader(http, './assets/i18n/', '.json');

}

@NgModule({
  declarations: [ScriptincidenceComponent],
  imports: [
    CommonModule,
    ScriptincidenceRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({

      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    }),
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,

  ]
})
export class ScriptincidenceModule { }
