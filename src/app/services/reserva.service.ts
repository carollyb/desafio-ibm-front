import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../models/reserva';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  baseUrl = 'http://localhost:8080/reservas';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.baseUrl);
  }
}
