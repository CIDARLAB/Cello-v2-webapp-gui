import { Deserializeable } from '@app/@shared/deserializeable/deserializeable.model';
import { TargetDataFiles } from '@app/library/shared/target-data-files.model';
import { Settings } from '@app/settings/shared/settings.model';
import * as moment from 'moment';
import { Constraint } from './constraint.model';
import { Result } from '@app/results/shared/result.model';

export class Project implements Deserializeable {
  name: string;
  description: string;

  created: moment.Moment;

  verilog: string;
  settings: Settings;
  constraints: {
    input_constraints: object;
    output_constraints: object;
  };
  library: TargetDataFiles;

  results: Result[];

  constructor() {
    this.settings = new Settings();
    this.library = new TargetDataFiles();
    this.constraints = { input_constraints: {}, output_constraints: {} };
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    this.created = moment(input.created);
    this.results = input.results.map((result: any) => new Result().deserialize(result));
    return this;
  }

  getSpecification() {
    let rtn = {
      verilog: this.verilog,
      settings: this.settings.getIntermediate(),
      constraints: {},
      library: this.library,
    };
    return rtn;
  }
}
