import { ExistingCollection } from './existing-collection.model';
import { NewCollection } from './new-collection.model';

export interface SynBioHubSubmission {
  registry: URL;
  project: string;
  result: string;
  collection: NewCollection | ExistingCollection;
}
