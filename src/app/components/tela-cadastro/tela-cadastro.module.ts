import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaCadastroComponent } from './tela-cadastro.component';
import { TelaCadastroRoutingModule } from './tela-cadastro-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TelaCadastroComponent
  ],
  imports: [
    CommonModule,
    TelaCadastroRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TelaCadastroModule { }
