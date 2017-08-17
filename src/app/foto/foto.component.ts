import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'foto',
  templateUrl: './foto.component.html'
})
export class FotoComponent implements OnInit {
  @Input() titulo:string = '';
  @Input() url:string = '';
  descricao:string = '';

  ngOnInit() {
    this.titulo = this.titulo.length > 7
                  ? this.titulo.substr(0,7) + '...'
                  : this.titulo;
  }
}
