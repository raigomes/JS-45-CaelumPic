import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'CaelumPic';
  fotos: Object[];

  //Faz uma requisicao GET, transforma em um array e atribui a "fotos"
  constructor(http:Http) {
    http.get("http://localhost:3000/v1/fotos")
        .map(res => res.json())
        .subscribe(fotos => {
          this.fotos = fotos;
        });
  }
}
