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
}
