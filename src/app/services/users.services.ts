import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser, Response, IUserResponse } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Response> {
    return this.http.get<Response>('https://reqres.in/api/users?page=2');
  }

  getActiveUser(id: string): Observable<IUserResponse> {
    return this.http.get<IUserResponse>(`https://reqres.in/api/users/${id}`);
  }

  putActiveUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`https://reqres.in/api/users/${user.id}`, user);
  }

  deleteUser(id: number = 1): Observable<any> {
    return this.http.delete<any>(
      `https://reqres.in/api/users/${id.toString()}`
    );
  }
}
