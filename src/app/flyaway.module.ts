import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlyawayComponent } from './flyaway.component';
import { PlaneDetailsComponent } from './components/planes/plane-details/plane-details.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanesService } from './components/planes/planes.service';

@NgModule({
  declarations: [
    FlyawayComponent,
    PlaneDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PlanesService],
  bootstrap: [FlyawayComponent]
})
export class FlyawayModule { }
