import { Parameter } from './parameter.model';
import { Deserializeable } from '@app/@shared/deserializeable/deserializeable.model';

export class Algorithm implements Deserializeable {
  name: string;
  parameters: Parameter[];

  getParameter(name: string): Parameter {
    for (let parameter of this.parameters) {
      if (parameter.name === name) {
        return parameter;
      }
    }
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
