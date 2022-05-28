/**Cuando se crea un componente, tiene que estar importado en un modulo
 * En este caso usamos app.module.ts para importar los componentes nuevos
 */
import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html' 
})

export class HeroeComponent{
    nombre: string='Iroman';
    edad: number = 30;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }


    obtenerNombre(): string {
        //Backthis = ``, nos ayuda a crear templates de un string 
        return `${this.nombre}-${this.edad}`;
        /** De la linea de arriba, se puede usar tambien de esta manera
         * return this.nombre +' - '+ this.edad;
         */
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad (): void{
        this.edad = 35;
    }
}