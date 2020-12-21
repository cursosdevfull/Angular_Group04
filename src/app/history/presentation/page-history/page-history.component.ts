import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { HistoryUseCase } from '../../application/history.usecase';
import { HistoryEntity } from '../../domain/history-entity';

@Component({
  selector: 'app-page-history',
  templateUrl: './page-history.component.html',
  styleUrls: ['./page-history.component.css'],
})
export class PageHistoryComponent implements OnInit {
  total: number;
  items: HistoryEntity[] = [];

  constructor(private readonly historyUseCase: HistoryUseCase) {}

  ngOnInit(): void {
    this.listByPage(0);
  }

  listByPage(page: number) {
    this.historyUseCase.getByPage(page).subscribe((response) => {
      this.total = response.total;
      this.items = response.items;
    });
  }

  changePage(page: number) {
    this.listByPage(page);
  }
}
