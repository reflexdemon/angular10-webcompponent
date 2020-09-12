import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-analytics-counter',
  templateUrl: './analytics-counter.html',
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AnalyticsCounterComponent implements OnInit {
counter = 10;
  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.counter++;
  }

  sub(): void {
    this.counter--;
  }
}
