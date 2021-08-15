import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[]=['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan américa'];
  heroeBorrado:string=''
  borrarHeroe(){
    this.heroeBorrado=this.heroes?.pop()||'No hay más heroes';
  }
}
