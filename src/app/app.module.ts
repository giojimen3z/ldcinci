import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/* Translate */
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NewProjectsComponent } from './pages/new-projects/new-projects.component';
import { CostProjectsComponent } from './pages/cost-projects/cost-projects.component';
import { ScriptIncidenceComponent } from './pages/script-incidence/script-incidence.component';
import { ViewProjectComponent } from './pages/view-project/view-project.component';
import { ViewProfileComponent } from './pages/view-profile/view-profile.component';
export function HttpLoaderFactory(http: HttpClient){

    return new TranslateHttpLoader(http, './assets/i18n/', '.json');

}

/* Jquery */

declare var $: any;


@NgModule({
  declarations: [
    AppComponent,
    NewProjectsComponent,
    CostProjectsComponent,
    ScriptIncidenceComponent,
    ViewProjectComponent,
    ViewProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({

      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
