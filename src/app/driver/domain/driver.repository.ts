import { Observable } from 'rxjs';
import { DriverEntity } from './driver-entity';

export abstract class DriverRepository {
  abstract insert(fd: FormData): Observable<DriverEntity>;
  abstract update(fd: FormData, id: string | number): Observable<DriverEntity>;
  abstract delete(id: string | number): Observable<DriverEntity>;
  abstract getAll(): Observable<DriverEntity[]>;
  abstract getOne(id: string | number): void;
}
