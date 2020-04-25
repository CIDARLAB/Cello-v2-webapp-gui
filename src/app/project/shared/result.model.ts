import { Deserializeable } from '@app/@shared/deserializeable/deserializeable.model';

export class Result implements Deserializeable {
  name: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
