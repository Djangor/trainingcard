import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LessonsService } from './lessons.service'

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
