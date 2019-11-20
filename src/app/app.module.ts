import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/* Translate */
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatPaginatorModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NewProjectsComponent } from './pages/new-projects/new-projects.component';
import { ViewProjectComponent } from './pages/view-project/view-project.component';
import { ViewProfileComponent } from './pages/view-profile/view-profile.component';
export function HttpLoaderFactory(http: HttpClient) {

    return new TranslateHttpLoader(http, './assets/i18n/', '.json');

}

import { MatExpansionModule } from '@angular/material/expansion';


/* Jquery */

declare var $: any;


@NgModule({
  declarations: [
    AppComponent,
    NewProjectsComponent,
    ViewProjectComponent,
    ViewProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatExpansionModule,
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
