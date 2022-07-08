import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorias'
})
export class CategoriasPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch(value){
      case 'Front-End': return 'code';
      case 'Back-End': return 'computer';
    }
    return 'code';
  }

}
