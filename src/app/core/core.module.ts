import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './presentation/page-login/page-login.component';
import { LoginComponent } from './presentation/components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './presentation/components/header/header.component';
import { MenuComponent } from './presentation/components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { CoreMaterialModule } from './core-material.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PageLoginComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CoreMaterialModule,
    TranslateModule,
  ],
  exports: [PageLoginComponent, HeaderComponent],
})
export class CoreModule {}
