import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaneDetailsComponent } from './components/planes/plane-details/plane-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaneDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
