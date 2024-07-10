import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdicionaTarefaComponent } from './adiciona-tarefa.component';

const routes: Routes = [
  {path: 'adicina-tarefa/:id', component: AdicionaTarefaComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdicionaTarefaRoutingModule { }
