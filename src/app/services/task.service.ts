import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// investigar que es el Observable
// sirve para poder manejar la operaciones asícoronas los cuales nos permiten
// Puedes definir eventos personalizados que envían la información de un componente hijo a un componente padre.
// El módulo HTTP usa observables para manejar la peticiones y respuestas AJAX.
// Los módulos Router (Enrutador) y Forms usan observables para escuchar y responder a los eventos del usuario.

import { Observable } from 'rxjs';
// al hacerlo tipado con ts también tenemos que exportarlo aquí
import { Task } from '../Task';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private baseUrl: string = 'http://localhost:3000/tasks'
  // dentro del constructor lo que haremos es definir los metodos que van hacer las peticiones
  // aquí le ponemos lo mismo que teniamos en el componente task
  constructor(private http:HttpClient) {}

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl)
  }

  save(task:Task): Observable<Task>{
    return this.http.post<Task>(this.baseUrl, task,httpOptions)
  }

  delete(task:Task): Observable<Task>{
    return this.http.delete<Task>(`${this.baseUrl}/${task.id}`)
  }

  update(task:Task):Observable<Task>{
    return this.http.put<Task>(`${this.baseUrl}/${task.id}`, task,httpOptions)
  }
}
