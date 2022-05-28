import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    /*Aqui decalramos los dos componentes a llamar */
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],

    /**Aqui solo ecportamos los datos que queremos que se visualicen en la app */
    exports: [
        ListadoComponent
    ],

    /** Aquí importamos los modulos*/
    imports: [
        CommonModule
    ]
})
 
export class HeroesModule{

}