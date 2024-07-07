import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialLogadoComponent } from './tela-inicial-logado.component';
import { TelaInicialLogadoRoutingModule } from './tela-inicial-logado-routing.module';



@NgModule({
  declarations: [
    TelaInicialLogadoComponent
  ],
  imports: [
    CommonModule,
    TelaInicialLogadoRoutingModule
  ]
})
export class TelaInicialLogadoModule { }
