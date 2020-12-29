import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
})
export class ReducePipe implements PipeTransform {
  transform(value: any, size: number, seemore: string) {
    const reducido = value.substring(0, size) + '... ' + seemore;
    return reducido;
  }
}
