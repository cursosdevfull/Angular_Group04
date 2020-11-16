import { Injectable } from '@angular/core';
import { IMenu } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menus: IMenu[] = [
    { path: '/histories', title: 'Historias', icon: 'face' },
    { path: '/drivers', title: 'Pilotos', icon: 'face' },
    { path: '/medics', title: 'Médicos', icon: 'face' },
  ];

  constructor() {}
}
