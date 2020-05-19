import { Deserializeable } from '@app/@shared/deserializeable/deserializeable.model';
import { SafeUrl } from '@angular/platform-browser';

export class Result implements Deserializeable {
  name: string;
  file: string;
  type: string;
  stage: string;
  description: string;
  tags: string;
  data: Blob | SafeUrl | string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
