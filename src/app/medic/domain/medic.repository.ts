import { Observable } from 'rxjs';
import { MedicEntity } from './medic-entity';

export abstract class MedicRepository {
  abstract insert(fd: FormData): Observable<MedicEntity>;
  abstract update(fd: FormData, id: string | number): Observable<MedicEntity>;
  abstract delete(id: string | number): Observable<MedicEntity>;
  abstract getAll(): Observable<MedicEntity[]>;
  abstract getOne(id: string | number): void;
}
