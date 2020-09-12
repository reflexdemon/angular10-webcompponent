import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AnalyticsCounterComponent } from './analytics-counter/analytics-counter.component';
import { Injector} from '@angular/core';
import { createCustomElement } from '@angular/elements';

@NgModule({
  entryComponents :  [
    AnalyticsCounterComponent
  ],
  declarations: [
    AnalyticsCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector){
  }
  ngDoBootstrap(): void {
    const el = createCustomElement(AnalyticsCounterComponent, {injector : this.injector});
    customElements.define('analytics-counter', el);
  }
}
