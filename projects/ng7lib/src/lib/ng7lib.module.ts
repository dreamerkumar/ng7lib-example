import { NgModule } from '@angular/core';
import { Ng7libComponent } from './ng7lib.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [Ng7libComponent],
  imports: [
    CommonModule
  ],
  exports: [Ng7libComponent]
})
export class Ng7libModule { }
