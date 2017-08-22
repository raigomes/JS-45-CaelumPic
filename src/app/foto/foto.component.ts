import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FotoComponent {
  @Input() titulo:string = '';
  @Input() url:string = '';
  descricao:string = '';
<<<<<<< HEAD
  _id:string = '';
=======
  id:string = '';
>>>>>>> b09b2d294e2ebb5ca20102154295dd2e6cf8c078
}
