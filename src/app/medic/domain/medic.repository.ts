import { MedicEntity } from './medic-entity';

export abstract class MedicRepository {
  abstract insert(medic: MedicEntity): void;
  abstract update(medic: MedicEntity, id: string | number): void;
  abstract delete(id: string | number): void;
  abstract getAll(): void;
  abstract getOne(id: string | number): void;
}
