import {Component} from '@angular/core';
@Component({
    selector:'app-heroe',
    templateUrl:'./heroe.component.html',
})

export class HeroeComponent{

    nombre: string='Ironman';
    edad:number=45;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarCombre():void{
        this.nombre='Spiderman';
    }

    cambiaeEdad():void{
        this.edad=30;
    }
}