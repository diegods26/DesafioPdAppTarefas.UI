import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarRoutingModule } from './navbar-routing.module';
import { HomeModule } from "../home/home.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
