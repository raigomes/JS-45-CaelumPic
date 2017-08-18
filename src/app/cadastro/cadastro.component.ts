import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {    
    foto:FotoComponent = new FotoComponent();
    http:Http;
    meuForm:FormGroup;

    constructor(http:Http, fb:FormBuilder) {
        this.http = http;
        this.meuForm = fb.group({
            titulo: ['',
                    Validators.compose(
                        [Validators.required, Validators.minLength(4)]
                    )
                    ],
            url: ['', Validators.required],
            descricao: ['']
        });
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
