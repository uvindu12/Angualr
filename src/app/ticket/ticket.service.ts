import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'http://localhost:8080/api/tickets';

  constructor(private http: HttpClient) {}

  createTickets(total: number, rate: number): Observable<any> {
    return this.http.post(this.apiUrl + '/create', { total, rate });
  }

  getTickets(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
