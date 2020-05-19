import { Deserializeable } from '@app/@shared/deserializeable/deserializeable.model';
import * as moment from 'moment';
import { Constraint } from './constraint.model';
import { Library } from './library.model';
import { Result } from './result.model';

export class Project implements Deserializeable {
  name: string;
  application: string;
  id: string;
  description: string;

  created: moment.Moment;

  verilog: string;
  settings: {
    application: string;
    applications: Map<string, any>;
  };
  constraints: {
    input: Constraint[];
    output: Constraint[];
  };
  library: Library;

  results: Result[];

  deserialize(input: any): this {
    Object.assign(this, input);
    this.created = moment(input.created);
    this.results = input.results.map((result: any) => new Result().deserialize(result));
    return this;
  }
}
