import { Component } from '@angular/core';

import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto:FotoComponent = new FotoComponent();

    cadastrar(event:Event) {
        event.preventDefault();
        alert(JSON.stringify(this.foto));
    }
}
