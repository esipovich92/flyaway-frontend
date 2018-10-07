import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plane } from '../../types/plane.type';

@Injectable()
export class PlaneService {
  private static readonly BASE_URL: string = 'http://localhost:8080/planes';

  constructor(private httpClient: HttpClient) {}

  public getPlane(id: number): Observable<Plane> {
    return this.httpClient.get<Plane>(PlaneService.BASE_URL + `/${id}`);
  }

  public getAll(): Observable<Plane[]> {
    return this.httpClient.get<Plane[]>(PlaneService.BASE_URL);
  }
}
