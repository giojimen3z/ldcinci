import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { MatSidenavModule, MatButtonModule, MatMenuModule, MatIconModule, MatCardModule, MatInputModule, MatToolbarModule, MatListModule, MatPaginatorModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
/* Translate */
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
export function HttpLoaderFactory(http: HttpClient){

    return new TranslateHttpLoader(http, './assets/i18n/', '.json');

}
@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({

      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    }),
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
export class ProjectsModule { }
