import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorComponent } from './tutor.component';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatExpansionModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule
  ],
  declarations: [
    TutorComponent
  ],
  exports: [
    TutorComponent
  ]
})
export class TutorModule { }
