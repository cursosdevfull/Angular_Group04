import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { UserRepository } from './user/domain/user-repository';
import { UserOperations } from './user/infraestructure/user.operations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MedicRepository } from './medic/domain/medic.repository';
import { MedicService } from './services/medic.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlPro } from './utils/paginator';
import { ExportRepository } from './shared/repositories/export.repository';
import { ExportService } from './services/export.service';
import { HistoryRepository } from './history/domain/history.repository';
import { HistoryService } from './history/infraestructure/history.service';

@NgModule({
  declarations: [AppComponent, MiComponenteComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: UserRepository, useClass: UserOperations },
    { provide: MedicRepository, useClass: MedicService },
    { provide: ExportRepository, useClass: ExportService },
    { provide: HistoryRepository, useClass: HistoryService },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlPro },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
