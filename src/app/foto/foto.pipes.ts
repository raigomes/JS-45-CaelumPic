import { FotoComponent } from './foto.component';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe é um tubo de transformação de dados na tela.
 * Ao vincular o pipe com uma variável com "|", ele chama o método transform que devolve o dado atualizado.
 */

@Pipe({name: 'filtroPorTitulo'})
export class FiltroPorTitulo implements PipeTransform {

    transform(fotos: FotoComponent[], digitado: string) {
        digitado = digitado.toLowerCase();
        if(digitado) {
            return fotos.filter(foto => foto.titulo.toLowerCase()
                                                   .includes(digitado) //similar ao find()
                                );
        }

        return fotos;
    }

}