import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResursResponse } from '../models/resurses';

@Injectable({
  providedIn: 'root',
})
export class ResursesService {
  constructor(private http: HttpClient) {}

  getAllResurses(): Observable<ResursResponse> {
    return this.http.get<ResursResponse>('https://reqres.in/api/unknown');
  }
}
