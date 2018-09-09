import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlyawayComponent } from './flyaway.component';
import { PlaneDetailsComponent } from './components/planes/plane-details/plane-details.component';

@NgModule({
  declarations: [
    FlyawayComponent,
    PlaneDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FlyawayComponent]
})
export class FlyawayModule { }
