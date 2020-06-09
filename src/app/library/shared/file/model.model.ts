import { Parameter } from './parameter.model';

export interface Model {
  collection: 'models';
  functions: Map<string, string>;
  name: string;
  parameters: Parameter[];
}
