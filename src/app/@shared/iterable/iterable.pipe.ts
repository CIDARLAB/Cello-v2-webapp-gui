import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iterable',
})
export class IterablePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
