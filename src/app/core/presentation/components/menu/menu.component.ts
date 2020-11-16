import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenu } from 'src/app/interfaces/menu.interface';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  listMenu: IMenu[] = [];

  constructor(
    private readonly menu: MenuService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.listMenu = this.menu.menus;
  }

  goTo(path: string): void {}
}
