export class User {
  id: string;
  username: string;
  email: string;
  password: string;
  newPwd: string;
  actualPwd: string;
  confirmPwd: string;
  role: string;
  token: string;

  constructor(
    id: string,
    username: string,
    email: string,
    password: string,
    newPwd: string,
    actualPwd: string,
    confirmPwd: string,
    role: string,
    token: string
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.newPwd = newPwd;
    this.actualPwd = actualPwd;
    this.confirmPwd = confirmPwd;
    this.role = role;
    this.token = token;
  }
}
