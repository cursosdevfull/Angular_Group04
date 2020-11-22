import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.css'],
})
export class SubtitleComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
