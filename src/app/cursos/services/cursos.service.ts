import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Curso } from '../model/curso';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = '/api/cursos';

  constructor(private httpClient: HttpClient) { }

  lista() {
    return this.httpClient.get<Curso[]>(this.API)
    .pipe(
      first(),
      delay(2000),
      tap(cursos => console.log(cursos))
    );
  }

  save(registro: Curso) {
    return this.httpClient.post<Curso>(this.API, registro);
  }
}
