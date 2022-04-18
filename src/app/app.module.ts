import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { OneTimelineComponent } from './one-timeline/one-timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    OneTimelineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
