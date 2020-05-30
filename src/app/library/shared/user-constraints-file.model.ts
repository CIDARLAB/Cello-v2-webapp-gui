import { Deserializeable } from '@app/@shared/deserializeable/deserializeable.model';
import { LibraryHeader } from './library-header.model';

export class UserConstraintsFile implements Deserializeable {
  file: string;
  header: LibraryHeader;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
