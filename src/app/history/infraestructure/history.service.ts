import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HistoryEntity } from '../domain/history-entity';
import { HistoryRepository } from '../domain/history.repository';

@Injectable()
export class HistoryService extends HistoryRepository {
  constructor(private readonly http: HttpClient) {
    super();
  }

  getByPage(
    page: number
  ): Observable<{ total: number; items: HistoryEntity[] }> {
    return this.http
      .get(`${environment.PATH_API}/histories/page/${page}`)
      .pipe(pluck('result'));
  }
  insert(history: Partial<HistoryEntity>): Observable<HistoryEntity> {
    return this.http.post<HistoryEntity>(
      `${environment.PATH_API}/histories/`,
      history
    );
  }
  getOne(id: string): Observable<HistoryEntity> {
    return this.http.get<HistoryEntity>(
      `${environment.PATH_API}/histories/${id}`
    );
  }
  update(history: HistoryEntity): Observable<HistoryEntity> {
    return this.http.put<HistoryEntity>(
      `${environment.PATH_API}/histories/${history._id}`,
      history
    );
  }
  delete(id: string): Observable<HistoryEntity> {
    return this.http.delete<HistoryEntity>(
      `${environment.PATH_API}/histories/${id}`
    );
  }
}
