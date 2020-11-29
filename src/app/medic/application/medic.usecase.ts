import { Injectable } from '@angular/core';
import { MedicEntity } from '../domain/medic-entity';
import { MedicRepository } from '../domain/medic.repository';

@Injectable({
  providedIn: 'root',
})
export class MedicUseCase {
  constructor(private readonly medicService: MedicRepository) {}

  insert(medic: MedicEntity) {
    this.medicService.insert(medic);
  }

  update(medic: MedicEntity, id: string | number) {
    this.medicService.update(medic, id);
  }

  delete(id: string | number) {
    this.medicService.delete(id);
  }

  getAll() {
    this.medicService.getAll();
  }

  getOne(id: string | number) {
    this.medicService.getOne(id);
  }
}
