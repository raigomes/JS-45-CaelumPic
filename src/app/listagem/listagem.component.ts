import { Component } from '@angular/core';
import { Http } from '@angular/http';

<<<<<<< HEAD
import { FotoComponent } from '../foto/foto.component';
=======
>>>>>>> b09b2d294e2ebb5ca20102154295dd2e6cf8c078
import { FotoService } from '../foto/foto.service';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent {
  title:string = 'CaelumPic';
  fotos:Object[];
<<<<<<< HEAD
  service:FotoService;
  mensagem:string = '';

  // Atualizando para FotoService
  constructor(service:FotoService) {
    this.service = service; 
=======

  // Atualizando para FotoService
  constructor(service:FotoService) {
>>>>>>> b09b2d294e2ebb5ca20102154295dd2e6cf8c078
    service.lista()
           .subscribe(fotos => {
             this.fotos = fotos;
           });
  }
<<<<<<< HEAD

  remove (foto:FotoComponent) {
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
  private removePhoto(foto:FotoComponent) : FotoComponent[] {
    let novasFotos = this.fotos.slice(0);
    let index = novasFotos.indexOf(foto);
    novasFotos.splice(index, 1);

    return <FotoComponent[]> novasFotos;
  }
=======
>>>>>>> b09b2d294e2ebb5ca20102154295dd2e6cf8c078
}
