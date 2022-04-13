interface User {
  _id: string;
  nickname: string;
  email: string;
  isEmailConfirmed: boolean;
  password: string;
}

export default User;
