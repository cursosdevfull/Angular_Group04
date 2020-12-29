import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { HistoryUseCase } from '../../application/history.usecase';
import { HistoryEntity } from '../../domain/history-entity';

@Component({
  selector: 'app-page-history',
  templateUrl: './page-history.component.html',
  styleUrls: ['./page-history.component.css'],
  /*   providers: [DatePipe], */
})
export class PageHistoryComponent implements OnInit {
  total: number;
  items: HistoryEntity[] = [];
  fecha = new Date();
  texto =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt magna quam, at convallis nibh vestibulum quis. Mauris volutpat consectetur neque, at malesuada metus efficitur et. Quisque vitae mi tincidunt, accumsan ante nec, lacinia ligula. Aliquam mollis, libero quis consequat pharetra, libero nisl mattis tortor, posuere ultrices est leo id sem. Etiam bibendum, elit id feugiat dapibus, dolor ligula gravida est, quis luctus neque mauris nec tortor. Nulla quis ultrices arcu. Nulla quis varius metus. Nullam feugiat lorem quis massa molestie, id sodales velit tempor. Praesent ut lectus lacus. Quisque eu tellus lacinia, fermentum nulla non, vulputate felis. Aenean tellus ligula, rhoncus viverra ornare a, lacinia quis mi.';

  constructor(
    private readonly historyUseCase: HistoryUseCase /*     private readonly datePipe: DatePipe */
  ) {}

  ngOnInit(): void {
    this.listByPage(0);
  }

  listByPage(page: number) {
    this.historyUseCase.getByPage(page).subscribe((response) => {
      this.total = response.total;
      /*       this.items = response.items.map((el: HistoryEntity) => {
        el.dateRequest = this.datePipe.transform(el.dateRequest, 'dd-MMM-yyyy');
        return el;
      }); */
      this.items = response.items;
    });
  }

  changePage(page: number) {
    this.listByPage(page);
  }

  delete(id: string) {
    this.historyUseCase.delete(id).subscribe(() => {
      this.listByPage(0);
    });
  }
}
