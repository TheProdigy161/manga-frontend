export class Register {
  username: string;
  email: string;
  password: string;

  constructor(data: Register) {
    Object.assign(this, data);
  }
}
