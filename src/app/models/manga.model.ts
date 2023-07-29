import { DateTime } from 'luxon';

export class Manga {
  id: string;
  name: string;
  releaseDate: string = DateTime.now().toFormat('yyyy-MM-dd');
  finishedDate: string = DateTime.now().toFormat('yyyy-MM-dd');

  constructor(data: Manga) {
    Object.assign(this, data);
  }
}

export class CreateManga {
  name: string;
  releaseDate: string = DateTime.now().toFormat('yyyy-MM-dd');
  finishedDate: string = DateTime.now().toFormat('yyyy-MM-dd');

  constructor(data: CreateManga) {
    Object.assign(this, data);
  }
}
