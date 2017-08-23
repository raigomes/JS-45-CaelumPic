import { NgModule } from '@angular/core';

import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';

import { Foto } from './foto';
import { FotoService } from './foto.service';

@NgModule({
  declarations: [
    FotoComponent, FiltroPorTitulo
  ],
  exports: [
    FotoComponent, FiltroPorTitulo
  ],
  providers: [
    FotoService, Foto
  ]
})
export class FotoModule { }
