import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListadoComponent } from './listado.component';

@NgModule({
    declarations: [
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        //Este modulo me permite usar las funciones
        //ngFor y ngIf por ejemplo
        CommonModule
    ]
})
export class HeroesModule {}

