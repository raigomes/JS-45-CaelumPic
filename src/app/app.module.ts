import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';

import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FotoModule, HttpModule, PainelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
