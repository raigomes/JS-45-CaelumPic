import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Foto } from './foto';
import { FotoComponent } from './foto.component';
import { Observable } from 'rxjs';

/**
 * Service é uma classe que encapsula as consultas em uma API Rest
 * 
 */

//Anotação de Service
@Injectable() 
export class FotoService {

    http: Http;
    headers: Headers;
    url: string = 'http://localhost:3000/v1/fotos';


    constructor(http: Http) {

        this.http = http;
        this.headers = new Headers();
        this.headers.set('Content-Type', 'application/json');
    }

    lista(): Observable<Foto[]> {

        return this.http.get(this.url).map(res => res.json());
    }

    //Cria ou Atualiza uma foto
    cadastra(foto: Foto): Observable<MensagemCadastro> {

        const headers = this.headers;
        
        if (foto._id) {
            return this.http.put(this.url + "/" + foto._id, 
                                 JSON.stringify(foto), 
                                 { headers })
                            .map(
                                () => new MensagemCadastro('Foto alterada')
                            );    
        }    
        else {
            return this.http.post(this.url, 
                                  JSON.stringify(foto), 
                                  { headers })
                            .map(
                                () => new MensagemCadastro('Foto incluida', true)
                            );
        }
    }

    remove(foto: Foto) {
        return this.http.delete(this.url + '/' + foto._id);
    }

    buscaPorId(id: string) {
        return this.http.get(this.url + '/' + id).map(res => res.json());
    }
}

export class MensagemCadastro {

    constructor(private _mensagem:string, private _inclusao:boolean=false){}

    get mensagem() {
        return this._mensagem;
    }

    get inclusao() {
        return this._inclusao;
    }
}