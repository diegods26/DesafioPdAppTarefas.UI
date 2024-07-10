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
  getUserTarefaByIdUrl: string = `${environment.baseApiUrl}/Tarefas/tarefas-por-usuario-id`

  constructor(private http: HttpClient) { }

  getListaTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.baseUrl);
  }

  getListaTarefasByUserId(userId: number): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(`${this.getUserTarefaByIdUrl}?id=${userId}`);
  }

  getTarefaById(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.baseUrl}/${id}`);
  }

  postTarefa(model: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(`${this.baseUrl}`, model);
  }

  updateTarefa(model: Tarefa): Observable<Tarefa> {
    return this.http.put<Tarefa>(`${this.baseUrl}`, model);
  }

  removeTarefa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`,)
  }
}
