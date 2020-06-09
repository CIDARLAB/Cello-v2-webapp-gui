import { Parameter } from './parameter.model';
import { Variable } from './variable.model';

export interface Function {
  collection: 'functions';
  equation: string;
  name: string;
  parameters: Parameter[];
  variables: Variable[];
}
