import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InformacoesService {

  baseUrl = 'http://localhost:3001/';

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

}
