import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

    <!--app.component.html es donde escribiremos codigo html(From end)-->

    <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
    <!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->
    <!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->
    <!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->
    <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
    <!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->
    <!-- * * * * * * * to get started with your project! * * * * * * * * -->
    <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->

    <!--La variable title, la sacamos de app.component.ts
    El codigo en ts, lo podemos usar en este apartado
    para hacerlo usamos dobles llaves {{Variable}}
    ejemplo-->
    <h1>{{title}}</h1>

    <h3>La base es: <strong>{{base}}</strong></h3>

    <!--Boton de incremento
    El boton tiene un evento, los eventos se usan con los parentesis
    (click) evento al presionar el boton-->
    <!--<button (click)="acumular(+1);"> +1 </button>-->
    <!--Tambien se puede mandar a llamar un metodo, se manda a llamar
    como una funcion ejmeplo
    <button (click)="sumar();"> +1 </button>-->
    <button (click)="acumular(+base);">+{{base}}</button>

    <!--Aqui imprimimos el valor del contador-->
    <span>{{numero}}</span>

    <!--Boton de desincremento-->
    <!--<button (click)="acumular(-1);">-1</button>-->
    <button (click)="acumular( -base );">-{{base}}</button>

    <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
    <!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->
    <!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->
    <!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->
    <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
    <!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->
    <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
    `
})
export class ContadorComponent{
    public title: string = 'Contador app';

    numero: number = 10;
    base: number= 5;

    /**Creacio de metodo Sumar */   
    sumar(){
        /**Se usa this, para hacer referencia a la propiedad de la clase 
        */
        this.numero+=1;
    }
    restar(){
        this.numero-=1;
    }

    /**Tambien hay una forma de de simplicar los metodos
     * Podemos crear un metodo y que haga la misma funcion de sumar
     * y restar cuando se necesite
     * ejemplo...
     */
    acumular(valor: number){
        this.numero +=valor;
        //this.numero+=(valor+this.base);

        //this.base+=valor;
  }
}