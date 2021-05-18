import { Component, Input, OnInit, VERSION, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-analytics-counter',
  templateUrl: './analytics-counter.html',
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AnalyticsCounterComponent implements OnInit {
  @Input()
  name:string;

  angularVersion = VERSION.full;
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
