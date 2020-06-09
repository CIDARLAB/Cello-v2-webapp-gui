import { Input } from './input.model';
import { Device } from './device.model';

export interface Structure {
  collection: 'structures';
  name: string;
  outputs?: string[];
  inputs?: Input[];
  devices?: Device[];
}
