import { Placement } from './placement.model';
import { Edge } from './edge.model';
import { Node } from './node.model';
import { Deserializeable } from '@app/@shared/deserializeable/deserializeable.model';

export class Netlist implements Deserializeable {
  name: string;
  inputFilename: string;
  placements: Placement[];
  nodes: Node[];
  edges: Edge[];

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
