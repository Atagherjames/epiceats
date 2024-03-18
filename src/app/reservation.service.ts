import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private http: HttpClient) {}
  private url: string = 'http://localhost:5000/reservation';
  reserve(data: object): Observable<object> {
    return this.http.post<any>(this.url, data);
  }
}
