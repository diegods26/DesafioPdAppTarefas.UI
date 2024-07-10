import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdicionaTarefaComponent } from './adiciona-tarefa.component';
import { AdicionaTarefaRoutingModule } from './adiciona-tarefa-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NaoAutorizadoModule } from '../nao-autorizado/nao-autorizado.module';



@NgModule({
  declarations: [
    AdicionaTarefaComponent,
  ],
  imports: [
    CommonModule,
    AdicionaTarefaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NaoAutorizadoModule
  ]
})
export class AdicionaTarefaModule { }
