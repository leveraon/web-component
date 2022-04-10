import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    ButtonComponent,
    NavbarComponent
  ],
  imports: [
  ],
  exports: [
    ButtonComponent
  ]
})
export class UiModule { }
