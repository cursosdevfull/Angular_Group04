import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './presentation/page-login/page-login.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './presentation/components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './presentation/components/header/header.component';
import { MenuComponent } from './presentation/components/menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PageLoginComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [PageLoginComponent, HeaderComponent],
})
export class CoreModule {}
