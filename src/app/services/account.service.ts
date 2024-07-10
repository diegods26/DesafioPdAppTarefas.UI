import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { AddUser, User, UserData } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl: string = `${environment.baseApiUrl}/account/login`;
  addUserUrl: string = `${environment.baseApiUrl}/Account/cadastro`;
  getUserUrl: string =`${environment.baseApiUrl}/Usuarios/obter-usurio-por-nome`


  private userDados$ = new BehaviorSubject<any>([]);
  public userDadosParams$ = this.userDados$.asObservable();

  get dadosUsuario(): Observable<any> {
    return this.userDadosParams$;
  }

  constructor(private http: HttpClient) { }

  addNewUser(model: AddUser): Observable<void> {
    return this.http.post<void>(`${this.addUserUrl}`, model);
  }

  loginUser(model: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}`, model);
  }

  getUserName(model: User) {
    return this.userDados$.next(name);
  }

  getUserByName(name: string): Observable<UserData> {
    return this.http.get<UserData>(`${this.getUserUrl}?nome=${name}`);
  }
}

