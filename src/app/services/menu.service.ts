import { Injectable } from '@angular/core';
import { IMenu } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menus: IMenu[] = [
    { path: '/dashboard', title: 'MENU.RESUMEN', icon: 'dashboard' },
    { path: '/histories', title: 'MENU.HISTORIAS', icon: 'face' },
    {
      path: '/drivers',
      title: 'MENU.PILOTOS',
      icon: 'local_hospital',
    },
    {
      path: '/medics',
      title: 'MENU.MEDICOS',
      icon: 'favorite_border',
    },
  ];

  constructor() {}
}
