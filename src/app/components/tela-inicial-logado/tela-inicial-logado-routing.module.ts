import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialLogadoComponent } from './tela-inicial-logado.component';

const routes: Routes = [
  {path: 'tela-inicial', component: TelaInicialLogadoComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaInicialLogadoRoutingModule { }
