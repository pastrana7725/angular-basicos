import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';

@Component({
    selector:'app-contador' ,
    template:` 
        <h1>{{titulo}}</h1>
        <button (click)="acumular(base*-1)">-{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(base)">+{{base}}</button>
        <h2>base: {{base}}</h2>
    `,
})

export class ContadorComponent{

  public titulo:string = 'Contador App';
  public numero:number = 0;
  public base:number = 5;

  acumular(valor:number){
    this.numero+=valor;
    if (this.numero<0){this.numero=0;};
  }

}