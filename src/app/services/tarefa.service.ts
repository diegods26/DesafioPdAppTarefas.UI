import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  baseUrl: string = `${environment.baseApiUrl}/Tarefas`

  constructor(private http: HttpClient) { }

  getListaTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.baseUrl);
  }
}
