import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './presentation/page-login/page-login.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './presentation/components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageLoginComponent, LoginComponent],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [PageLoginComponent],
})
export class CoreModule {}
