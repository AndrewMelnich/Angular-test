export interface IUser {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
}

export interface IUserResponse {
  data?: IUser;
}

export interface Response {
  data?: IUser[];
}
