import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { TelaInicialLogadoModule } from './components/tela-inicial-logado/tela-inicial-logado.module';
import { HttpClientModule } from '@angular/common/http'

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
