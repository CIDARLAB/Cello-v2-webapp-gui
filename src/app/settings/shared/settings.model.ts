import { Deserializeable } from '@app/@shared/deserializeable/deserializeable.model';
import { Application } from './application.model';

export class Settings implements Deserializeable {
  applications: Application[];
  application: Application;
  default: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.applications = input.applications.map((data: object) => new Application().deserialize(data));
    for (let a of this.applications) {
      if (a.name === this.default) {
        this.application = a;
      }
    }
    return this;
  }

  // TODO barf
  getIntermediate() {
    let rtn = {
      application: this.application.name,
      parameters: {},
    };
    for (let stage of this.application.stages) {
      rtn.parameters[stage.name] = stage.algorithm.name;
      for (let parameter of stage.algorithm.parameters) {
        rtn.parameters[stage.name + '.' + parameter.name] = parameter.value;
      }
    }
    return rtn;
  }
}
