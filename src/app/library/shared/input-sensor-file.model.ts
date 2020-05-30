import { Deserializeable } from '@app/@shared/deserializeable/deserializeable.model';

export class InputSensorFile implements Deserializeable {
  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
