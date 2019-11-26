import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostRoutingModule } from './cost-routing.module';
import { CostComponent } from './cost.component';
import { MatExpansionModule, MatCardModule, MatIconModule } from '@angular/material';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
export function HttpLoaderFactory(http: HttpClient){
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [CostComponent],
  imports: [
    CommonModule,
    CostRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({

      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    }),
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
  ]
})
export class CostModule { }
