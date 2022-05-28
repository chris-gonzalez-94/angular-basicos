import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
  heroes: string[]=['Iron man', 'Spiderman', 'Hulk','Thor'];
  heroeBorrado: string = '';

  /**Ejercicio 1
   * Borrar datos del arreglo uno en uno o todos a la vez con un boton
   */
  borrarHeroe(){
    /**shift borra un dato del archivo del arreglo, esta funcion ya esta en TypeScript */
    const borrado = this.heroes.shift();
    console.log('Borrando....');

    /**Ejercicio 2
   * Imprimir por pantalla, los elementos borrados del arreglo
   */

    this.heroeBorrado = this.heroes.shift() || '';
  }

  

}
