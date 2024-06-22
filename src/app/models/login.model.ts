export class Login {
  email: string;
  password: string;

  constructor(data: Login) {
    Object.assign(this, data);
  }
}
