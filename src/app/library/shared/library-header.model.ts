import * as moment from 'moment';

export interface LibraryHeader {
  collection: string;
  description: string;
  version: string;
  date: moment.Moment;
  author: string[];
  organism: string;
  genome: string;
  media: string;
  temperature: number;
  growth: string;
}
