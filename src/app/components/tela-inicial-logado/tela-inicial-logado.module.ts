import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialLogadoComponent } from './tela-inicial-logado.component';
import { TelaInicialLogadoRoutingModule } from './tela-inicial-logado-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TelaInicialLogadoComponent
  ],
  imports: [
    CommonModule,
    TelaInicialLogadoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TelaInicialLogadoModule { }
