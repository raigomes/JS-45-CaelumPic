import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Foto } from '../foto/foto';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {    
    foto:Foto = new Foto();
    service:FotoService;
    meuForm:FormGroup;
    route:ActivatedRoute;
    router:Router;
    mensagem:string = '';

    /**
     * 
     * @param service Importa o serviço que acessa a API de fotos
     * @param fb 
     * @param route Pega os parametros da url (GET)
     * @param router Define os parâmetros de navegação
     */
    constructor(service:FotoService, 
                fb:FormBuilder, 
                route:ActivatedRoute, 
                router:Router) {
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
        this.router = router;
    }

    cadastrar(event:Event) {
        event.preventDefault();

        this.service.cadastra(this.foto)
                    .subscribe(
                        res => {
                            this.mensagem = res.mensagem;
                            this.foto = new Foto();
                            
                            if(!res.inclusao) this.router.navigate(['']);
                        },
                        err => {
                            console.log(err);
                        }
                    );
    }
}
