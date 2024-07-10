import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaCadastroComponent } from './tela-cadastro.component';

const routes: Routes = [
  {path: 'cadastro-usuario', component: TelaCadastroComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaCadastroRoutingModule { }
