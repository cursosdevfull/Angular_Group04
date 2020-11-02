import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { UserRepository } from './user/domain/user-repository';
import { UserOperations } from './user/infraestructure/user.operations';

@NgModule({
  declarations: [AppComponent, MiComponenteComponent],
  imports: [BrowserModule],
  providers: [{ provide: UserRepository, useClass: UserOperations }],
  bootstrap: [AppComponent],
})
export class AppModule {}
