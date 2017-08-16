import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';

import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent, ListagemComponent, CadastroComponent
  ],
  imports: [
    BrowserModule, FotoModule, HttpModule, PainelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
