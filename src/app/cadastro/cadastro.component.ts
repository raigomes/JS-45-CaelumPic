import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    http:Http;
    foto:FotoComponent = new FotoComponent();

    constructor(http:Http) {
        this.http = http;
    }

    cadastrar(event:Event) {
        event.preventDefault();

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post('http://localhost:3000/v1/fotos', 
                        JSON.stringify(this.foto),
                        {headers})
                 .subscribe(
                        () => this.foto = new FotoComponent(),
                        err => console.log(err)
                 );
                 
        //alert(JSON.stringify(this.foto));
    }
}
