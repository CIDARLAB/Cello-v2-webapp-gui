import { Stage } from './stage.model';
import { Deserializeable } from '@app/@shared/deserializeable/deserializeable.model';

export class Application implements Deserializeable {
  name: string;
  stages: Stage[];

  public getStage(name: string): Stage {
    for (let stage of this.stages) {
      if (stage.name === name) {
        return stage;
      }
    }
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    this.stages = input.stages.map((data: object) => new Stage().deserialize(data));
    return this;
  }
}
