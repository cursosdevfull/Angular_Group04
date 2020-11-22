import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
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
    private readonly router: Router,
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'doctor',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/icons/doctor.svg'
      )
    );
  }

  ngOnInit(): void {
    this.listMenu = this.menu.menus;
  }

  goTo(path: string): void {
    this.router.navigate([path]);
  }
}
