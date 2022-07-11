import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorias'
})
export class CategoriasPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch(value){
      case 'Banco de Dados': return 'database';
      case 'Comportamento': return 'code';
      case 'Comunicação': return 'communication';
      case 'Metodologia': return 'computer';
      case 'Multiplataforma': return 'splitscreen';
    }
    return 'code';
  }

}
