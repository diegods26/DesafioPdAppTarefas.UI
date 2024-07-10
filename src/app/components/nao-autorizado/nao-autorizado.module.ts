import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaoAutorizadoComponent } from './nao-autorizado.component';
import { NaoAutorizadoRoutingModule } from './nao-autorizado-routing.module';



@NgModule({
  declarations: [
    NaoAutorizadoComponent
  ],
  imports: [
    CommonModule,
    NaoAutorizadoRoutingModule
  ],
  exports: [NaoAutorizadoComponent]
})
export class NaoAutorizadoModule { }
