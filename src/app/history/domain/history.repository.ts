import { Observable } from 'rxjs';
import { HistoryEntity } from './history-entity';

export abstract class HistoryRepository {
  abstract getByPage(
    page: number
  ): Observable<{ total: number; items: HistoryEntity[] }>;
  abstract insert(history: HistoryEntity): Observable<HistoryEntity>;
  abstract getOne(id: string): Observable<HistoryEntity>;
  abstract update(history: HistoryEntity): Observable<HistoryEntity>;
  abstract delete(id: string): Observable<HistoryEntity>;
}
