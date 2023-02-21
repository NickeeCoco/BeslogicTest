import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rental } from './rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private apiServerUrl = 'http://localhost:8080/rental';

  constructor(private http: HttpClient) {};

  public getRentals(): Observable<Rental[]> {
    return this.http.get<Rental[]>(`${this.apiServerUrl}/all`);
  }

  public getRentalById(id: number): Observable<Rental> {
    return this.http.get<Rental>(`${this.apiServerUrl}/find/${id}`)
  }

  public addRental(rental: Rental): Observable<Rental> {
    return this.http.post<Rental>(`${this.apiServerUrl}/add`, rental)
  }
}
