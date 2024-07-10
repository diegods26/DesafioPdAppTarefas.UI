import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarTarefaComponent } from './editar-tarefa.component';
import { EditarTarefaRoutingModule } from './editar-tarefa-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditarTarefaComponent
  ],
  imports: [
    CommonModule,
    EditarTarefaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditarTarefaModule { }
