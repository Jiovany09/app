import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroContenedor'
})
export class FiltroContenedorPipe implements PipeTransform {

  transform(arreglo : any[], texto : string): any {

    if(texto === ''){
      return arreglo;
    }
    texto = texto.toLowerCase();

    return arreglo.filter( item =>{
      return item.contenedor.toLowerCase()
          .includes( texto );
    });
  }

}
