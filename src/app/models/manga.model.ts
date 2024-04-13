import { DateTime } from 'luxon';

export class Manga {
  id: string;
  name: string;
  authorId: string;
  imageUrl: string;
  releaseDate: string = DateTime.now().toFormat('yyyy-MM-dd');
  finishedDate: string = DateTime.now().toFormat('yyyy-MM-dd');

  constructor(data: Manga) {
    this.id = data.id;
    this.name = data.name;
    this.authorId = data.authorId;
    this.imageUrl = data.imageUrl;
    this.releaseDate = data.releaseDate;
    this.finishedDate = data.finishedDate;
  }
}

export class CreateManga {
  name: string;
  imageUrl: string;
  authorId: string;
  releaseDate: string = DateTime.now().toFormat('yyyy-MM-dd');
  finishedDate: string = DateTime.now().toFormat('yyyy-MM-dd');

  constructor(data: CreateManga) {
    this.name = data.name;
    this.imageUrl = data.imageUrl;
    this.authorId = data.authorId;
    this.releaseDate = data.releaseDate;
    this.finishedDate = data.finishedDate;
  }
}