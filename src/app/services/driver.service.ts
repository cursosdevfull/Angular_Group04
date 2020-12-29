import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DriverEntity } from '../driver/domain/driver-entity';
import { DriverRepository } from '../driver/domain/driver.repository';

@Injectable({
  providedIn: 'root',
})
export class DriverService extends DriverRepository {
  constructor(private readonly http: HttpClient) {
    super();
  }

  insert(fd: FormData): Observable<DriverEntity> {
    throw new Error('Method not implemented.');
  }
  update(fd: FormData, id: string | number): Observable<DriverEntity> {
    throw new Error('Method not implemented.');
  }
  delete(id: string | number): Observable<DriverEntity> {
    throw new Error('Method not implemented.');
  }
  getAll(): Observable<DriverEntity[]> {
    return this.http
      .get<DriverEntity[]>(`${environment.PATH_API}/drivers/`)
      .pipe(pluck('result'));
  }
  getOne(id: string | number): void {
    throw new Error('Method not implemented.');
  }
}
