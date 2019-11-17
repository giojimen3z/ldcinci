import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from '../register/register.component';

/* Translate */
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MatSidenavModule, MatButtonModule, MatMenuModule, MatIconModule, MatInputModule, MatToolbarModule, MatListModule, MatTableModule, MatPaginatorModule } from '@angular/material';
export function HttpLoaderFactory(http: HttpClient){

    return new TranslateHttpLoader(http, './assets/i18n/', '.json');

}

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
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
export class RegisterModule { }
