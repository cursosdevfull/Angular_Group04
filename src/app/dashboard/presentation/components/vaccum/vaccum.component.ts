import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-vaccum',
  templateUrl: './vaccum.component.html',
  styleUrls: ['./vaccum.component.css'],
})
export class VaccumComponent implements OnInit {
  view: number[] = [500, 300];
  results = [];
  scheme = {
    domain: ['#0d47a1', '#42a5f5', '#90caf9'],
  };
  legend = true;
  legendPosition = 'right';
  legendTitle = 'Meses';

  gradient = true;
  doughnut = true;

  constructor(private readonly socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.listen('dataupdate').subscribe((results: []) => {
      console.log(results);
      this.results = results.map((el, ind) => {
        return { name: `Vaccum ${ind + 1}`, value: el };
      });
    });
  }
}
