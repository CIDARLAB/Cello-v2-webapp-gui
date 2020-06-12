import { ExistingCollectionDescriptor } from './existing-collection-descriptor.model';
import { NewCollectionDescriptor } from './new-collection-descriptor.model';

export interface SynBioHubSubmission {
  registry: URL;
  project: string;
  result: string;
  collection: NewCollectionDescriptor | ExistingCollectionDescriptor;
}
