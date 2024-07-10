import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { TelaInicialLogadoModule } from './components/tela-inicial-logado/tela-inicial-logado.module';
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditarTarefaModule } from './components/editar-tarefa/editar-tarefa.module';
import { TelaCadastroModule } from './components/tela-cadastro/tela-cadastro.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdicionaTarefaModule } from './components/adiciona-tarefa/adiciona-tarefa.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NaoAutorizadoModule } from './components/nao-autorizado/nao-autorizado.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HomeModule,
    TelaInicialLogadoModule,
    AdicionaTarefaModule,
    HttpClientModule,
    FontAwesomeModule,
    EditarTarefaModule,
    TelaCadastroModule,
    //NaoAutorizadoModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
