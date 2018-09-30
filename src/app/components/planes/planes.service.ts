import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PlanesService {
  private static readonly BASE_URL: string = 'http://localhost:8080/planes';

  constructor(private httpClient: HttpClient) {}

  public getPlane(id: number): Observable<any> {
    return this.httpClient.get(PlanesService.BASE_URL + `/${id}`);
  }

}
