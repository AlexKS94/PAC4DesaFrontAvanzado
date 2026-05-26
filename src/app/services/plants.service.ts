import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import {
  Plant,
  PlantListResponse,
  PlantResponse,
} from '../models/plant.interface';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  private readonly apiUrl = 'https://api.inaturalist.org/v1';

  constructor(private http: HttpClient) {}

  getPlants(page: number = 1): Observable<PlantListResponse> {
    const params = new HttpParams()
      .set('taxon_id', '47126')
      .set('photos', 'true')
      .set('per_page', '30')
      .set('page', page)
      .set('order', 'asc')
      .set('order_by', 'id');

    return this.http.get<PlantListResponse>(`${this.apiUrl}/observations`, {
      params,
    });
  }

  getPlantById(id: number): Observable<Plant> {
    return this.http
      .get<PlantResponse>(`${this.apiUrl}/observations/${id}`)
      .pipe(map((response) => response.results[0]));
  }
}
