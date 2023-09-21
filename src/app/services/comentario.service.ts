import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComentarioService {
  private myAppUrl = 'https://localhost:7117/';
  private myApiUrl = 'api/comentario/';

  constructor(private http: HttpClient) {}

  getListComentario(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteComentario(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }
}
