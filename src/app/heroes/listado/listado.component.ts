import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk'];
  heroeborrado: string = '';

  borrarHeroe(){
    console.log('Borrando...')
    this.heroeborrado = this.heroes.shift() || '';
  }
}
