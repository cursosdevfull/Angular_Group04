import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MedicEntity } from '../medic/domain/medic-entity';
import { MedicRepository } from '../medic/domain/medic.repository';
import { StorageService } from './storage.service';

@Injectable()
export class MedicService extends MedicRepository {
  constructor(
    private readonly http: HttpClient,
    private readonly storage: StorageService
  ) {
    super();
  }

  insert(fd: FormData): Observable<MedicEntity> {
    return this.http.post<MedicEntity>(`${environment.PATH_API}/medics`, fd);
  }

  update(fd: FormData, id: string | number): Observable<MedicEntity> {
    return this.http.put<MedicEntity>(
      `${environment.PATH_API}/medics/${id}`,
      fd
    );
  }

  delete(id: string | number): Observable<MedicEntity> {
    return this.http.delete<MedicEntity>(
      `${environment.PATH_API}/medics/${id}`
    );
  }
  getAll(): Observable<MedicEntity[]> {
    return this.http
      .get<MedicEntity[]>(`${environment.PATH_API}/medics/`)
      .pipe(pluck('result'));
  }
  getOne(id: string | number): Observable<MedicEntity> {
    return this.http.get<MedicEntity>(`${environment.PATH_API}/medics/${id}`);
  }
}
