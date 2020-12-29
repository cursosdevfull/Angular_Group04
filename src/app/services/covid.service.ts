import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Covid } from '../interfaces/covid.interface';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Covid[]> {
    return this.http
      .get<Covid[]>('/api/confirmed')
      .pipe(map((data) => data.slice(0, 20)));
  }
}
