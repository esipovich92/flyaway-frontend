import { Component, OnInit } from '@angular/core';
import { Plane } from '../../../types/plane.type';
import { PlaneService } from '../plane.service';

@Component({
  selector: 'flyaway-planes-table',
  templateUrl: './planes-table.component.html',
  styleUrls: ['./planes-table.component.css']
})
export class PlanesTableComponent implements OnInit {
  public planes: Plane[] = [];

  constructor(private planeService: PlaneService) { }

  ngOnInit() {
    this.planeService.getAll().subscribe((planes: Plane[]) =>
      this.planes = planes
    );
  }

}
