import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getListUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServiceUrl}/api/users/all-list`);
  }

  public getUserById(userId: number | undefined): Observable<User> {
    return this.http.get<User>(`${this.apiServiceUrl}/api/users/${userId}`);
  }
}
