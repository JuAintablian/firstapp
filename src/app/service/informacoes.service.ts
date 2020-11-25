import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Informacao } from './informacoes.model';

@Injectable({
  providedIn: 'root'
})
export class InformacoesService {

  baseUrl = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    return EMPTY;
  }

  read(): Observable<any> {
    const url = `${this.baseUrl}informacoes`;

    return this.http.get(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Informacao> {
    const url = `${this.baseUrl}informacoes/${id}`;

    return this.http.get<Informacao>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(informacao: Informacao): Observable<Informacao> {
    const url = `${this.baseUrl}informacoes/${informacao.id}`;

    return this.http.put<Informacao>(url, informacao).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  create(informacao: Informacao): Observable<Informacao> {
    const url = `${this.baseUrl}informacoes`;

    return this.http.post<Informacao>(url, informacao).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<Informacao> {
    const url = `${this.baseUrl}informacoes/${id}`;

    return this.http.delete<Informacao>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

}
