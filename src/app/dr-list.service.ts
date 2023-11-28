import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Physician } from './physician.model';

@Injectable({
  providedIn: 'root',
})
export class DrListService {
  private apiUrl = 'doximity/src/assets/data/DrList.json'; // Define the API URL here

  constructor(private http: HttpClient) {}

  getPhysicianData(): Observable<Physician[]> {
    return this.http.get<Physician[]>(this.apiUrl);
  }
}
