import { Deserializeable } from '@app/@shared/deserializeable/deserializeable.model';

export class OutputDeviceFileDescriptor implements Deserializeable {
  file: string;
  header: any;
  isPrivate: boolean;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
