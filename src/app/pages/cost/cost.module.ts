import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostRoutingModule } from './cost-routing.module';
import { CostComponent } from './cost.component';
import { MatExpansionModule, MatCardModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [CostComponent],
  imports: [
    CommonModule,
    CostRoutingModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class CostModule { }
