import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HotToastModule} from "@ngneat/hot-toast";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HotToastModule.forRoot()
  ],
  exports: [ReactiveFormsModule, FormsModule, HotToastModule]
})
export class SharedModule {
}
