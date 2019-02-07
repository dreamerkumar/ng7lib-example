import { NgModule } from '@angular/core';
import { Ng7libComponent } from './ng7lib.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [Ng7libComponent],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
  ],
  exports: [Ng7libComponent]
})
export class Ng7libModule { }
