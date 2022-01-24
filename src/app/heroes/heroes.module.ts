import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

//Los modulos permiten agrupar los componentes y evitar tener que declararlos todos en el app.component.ts(podrian llegar a ser cientas de lineas de codigo)
@NgModule({
    declarations:[ //En declaraciones indico tdos los componentes que iran dentro del modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //cosas de las declaration que quiero hacer publicas para la aplicacion. El resto quedará invisible 
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]

})
export class HeroesModule {}