import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './components/category-card/category-card.component';



@NgModule({
  declarations: [
    CategoryCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CategoryCardComponent]
})
export class SharedModule { }
