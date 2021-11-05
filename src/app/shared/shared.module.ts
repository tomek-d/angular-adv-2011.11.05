import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

const publicModules = [CommonModule, ReactiveFormsModule];

@NgModule({
  declarations: [],
  imports: [
    ...publicModules
  ],
  exports: [
    ...publicModules
  ]
})
export class SharedModule { }
