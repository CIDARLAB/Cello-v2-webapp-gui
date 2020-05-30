import { Deserializeable } from '@app/@shared/deserializeable/deserializeable.model';
import { Algorithm } from './algorithm.model';

export class Stage implements Deserializeable {
  name: string;
  algorithms: Algorithm[];
  algorithm: Algorithm;
  default: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.algorithms = input.algorithms.map((data: object) => new Algorithm().deserialize(data));
    for (let a of this.algorithms) {
      if (a.name === this.default) {
        this.algorithm = a;
      }
    }
    return this;
  }
}
