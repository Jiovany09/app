import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { FiltroContenedorPipe } from './filtro-contenedor.pipe';



@NgModule({
  declarations: [FiltroPipe, FiltroContenedorPipe],
  exports: [ FiltroPipe,FiltroContenedorPipe ]

})
export class PipesModule { }
