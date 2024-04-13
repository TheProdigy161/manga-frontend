import { DateTime } from 'luxon';

export class Author {
  id: string;
  name: string;
  imageUrl: string;
  birthDate: string = DateTime.now().toFormat('yyyy-MM-dd');
  deathDate: string | null = null;

  constructor(data: Author) {
    Object.assign(this, data);
  }
}

export class CreateAuthor {
  name: string;
  imageUrl: string;
  birthDate: string = DateTime.now().toFormat('yyyy-MM-dd');
  deathDate: string | null = null;

  constructor(data: CreateAuthor) {
    Object.assign(this, data);
  }
}
