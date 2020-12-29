import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { HistoryEntity } from '../domain/history-entity';
import { HistoryRepository } from '../domain/history.repository';

@Injectable()
export class HistoryResolve implements Resolve<HistoryEntity> {
  constructor(private readonly historyRepository: HistoryRepository) {}
  resolve(route: ActivatedRouteSnapshot): Observable<HistoryEntity> {
    const id = route.paramMap.get('id');

    return this.historyRepository.getOne(id).pipe(pluck('result'));
  }
}
