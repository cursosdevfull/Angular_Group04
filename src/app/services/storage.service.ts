import { Injectable } from '@angular/core';
import { AbstractStorage } from '../interfaces/storage.interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService extends AbstractStorage {
  save(property: string, value: string | object): void {
    const valueString: string =
      typeof value === 'object' ? this.cast(value) : value;
    sessionStorage.setItem(property, valueString);
  }
  get(property: string): string {
    return sessionStorage.getItem(property);
  }

  clear() {
    sessionStorage.clear();
  }
}
