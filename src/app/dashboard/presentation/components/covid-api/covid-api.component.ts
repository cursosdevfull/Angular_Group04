import { Component, OnInit } from '@angular/core';
import { Covid } from 'src/app/interfaces/covid.interface';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-covid-api',
  templateUrl: './covid-api.component.html',
  styleUrls: ['./covid-api.component.css'],
})
export class CovidApiComponent implements OnInit {
  view: number[] = [700, 400];
  dataCovid = [];
  scheme = {
    domain: ['#0d47a1', '#42a5f5', '#90caf9'],
  };

  xAxis = true;
  yAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Países';
  yAxisLabel = 'Cantidad de contagiados';

  yScaleMin = 0;
  yScaleMax = 2400;

  showGridLines = true;

  legend = true;
  legendPosition = 'right';
  legendTitle = 'Meses';

  constructor(private readonly covidApiService: CovidService) {}

  ngOnInit(): void {
    this.covidApiService.getAll().subscribe((data: Covid[]) => {
      this.dataCovid = data.map((el: Covid) => {
        return { name: el.countryRegion, value: el.confirmed };
      });
    });
  }
}
