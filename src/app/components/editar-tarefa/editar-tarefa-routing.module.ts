import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditarTarefaComponent } from './editar-tarefa.component';

const routes: Routes = [
  {path: 'editar-tarefa/:id', component: EditarTarefaComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarTarefaRoutingModule { }
