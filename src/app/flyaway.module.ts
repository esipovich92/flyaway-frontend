import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlyawayComponent } from './flyaway.component';
import { PlaneDetailsComponent } from './components/planes/plane-details/plane-details.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaneService } from './components/planes/plane.service';
import { FormsTextComponent } from './inputs/forms-text.component';
import { PlanesTableComponent } from './components/planes/planes-table/planes-table.component';

@NgModule({
  declarations: [
    FlyawayComponent,
    PlaneDetailsComponent,
    FormsTextComponent,
    PlanesTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PlaneService],
  bootstrap: [FlyawayComponent]
})
export class FlyawayModule { }
