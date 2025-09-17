import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactMessage } from '../models/ContactMessage';
import { environment } from '../../environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendMessage(message: ContactMessage): Observable<any> {
    return this.http.post(`${environment.apiUrl}/contact`, message);
  }
}
