import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { Foto } from '../foto/foto';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent {
  title:string = 'CaelumPic';
  fotos:Object[];
  service:FotoService;
  mensagem:string = '';

  // Atualizando para FotoService
  constructor(service:FotoService) {
    this.service = service; 
    service.lista()
           .subscribe(fotos => {
             this.fotos = fotos;
           });
  }

  // Atualizando para Foto
  remove (foto:Foto) {
    this.service.remove(foto)
                .subscribe(
                  () => {
                    console.log("Removido");                    
                    this.fotos = this.removePhoto(foto);

                    this.mensagem = 'Foto removida com sucesso';
                  },
                  err => {
                    console.log(err);

                    this.mensagem = 'Não foi possivel remover a foto';
                  }
                );
  }

  //Remove foto na tela sem fazer requisição
  private removePhoto(foto:Foto) : Foto[] {
    let novasFotos = this.fotos.slice(0);
    let index = novasFotos.indexOf(foto);
    novasFotos.splice(index, 1);

    return <Foto[]> novasFotos;
  }
}
