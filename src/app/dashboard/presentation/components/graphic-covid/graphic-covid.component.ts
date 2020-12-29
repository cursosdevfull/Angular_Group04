import { Component, OnInit } from '@angular/core';
import mockCovid from '../../../../mocks/covid2020.json';

@Component({
  selector: 'app-graphic-covid',
  templateUrl: './graphic-covid.component.html',
  styleUrls: ['./graphic-covid.component.css'],
})
export class GraphicCovidComponent implements OnInit {
  view: number[] = [700, 400];
  seriesByCountry = mockCovid;
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

  constructor() {}

  ngOnInit(): void {}
}
