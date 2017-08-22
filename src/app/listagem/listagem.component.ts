import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { FotoService } from '../foto/foto.service';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent {
  title:string = 'CaelumPic';
  fotos:Object[];

  // Atualizando para FotoService
  constructor(service:FotoService) {
    service.lista()
           .subscribe(fotos => {
             this.fotos = fotos;
           });
  }
}
