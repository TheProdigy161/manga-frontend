import { DateTime } from 'luxon';

export class Manga {
  id: string;
  name: string;
  releasedDate: DateTime;
  finishedDate: DateTime;
}
