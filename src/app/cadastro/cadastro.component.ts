import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {    
    foto:FotoComponent = new FotoComponent();
    service:FotoService;
    meuForm:FormGroup;
    route:ActivatedRoute;

    constructor(service:FotoService, fb:FormBuilder, route:ActivatedRoute) {
        this.service = service;
        this.meuForm = fb.group({
            titulo: ['',
                    Validators.compose(
                        [Validators.required, Validators.minLength(4)]
                    )
                    ],
            url: ['', Validators.required],
            descricao: ['']
        });
        this.route = route;
        this.route.params.subscribe(params => {
            let id = params.id;
            if(id) {
                this.service.buscaPorId(id)
                            .subscribe(foto => this.foto = foto);
            }
        });
    }

    cadastrar(event:Event) {
        event.preventDefault();

        this.service.cadastra(this.foto)
                    .subscribe(
                        () => {
                            console.log("OK");
                            this.foto = new FotoComponent();
                        },
                        err => {
                            console.log(err);
                        }
                    );
    }
}
