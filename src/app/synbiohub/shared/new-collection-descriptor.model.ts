/**
 * Description of a new SynBioHub collection.
 */
export interface NewCollectionDescriptor {
  name: string;
  description: string;
  id: string;
  version: string;
  citations: string;
  overwrite: '0' | '1';
}
