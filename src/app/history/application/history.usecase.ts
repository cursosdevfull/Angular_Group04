import { Injectable } from '@angular/core';
import { HistoryEntity } from '../domain/history-entity';
import { HistoryRepository } from '../domain/history.repository';

@Injectable({
  providedIn: 'root',
})
export class HistoryUseCase {
  constructor(private readonly historyService: HistoryRepository) {}

  getByPage(page: number) {
    return this.historyService.getByPage(page);
  }

  insert(history: HistoryEntity) {
    return this.historyService.insert(history);
  }

  getOne(id: string) {
    return this.historyService.getOne(id);
  }

  update(history: HistoryEntity) {
    return this.historyService.update(history);
  }

  delete(id: string) {
    return this.historyService.delete(id);
  }
}
