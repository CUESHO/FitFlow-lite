import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class FitflowApiService {
  // Aquí apuntamos al servidor Flask
  private apiUrl = 'http://localhost:5000/api/miembros'; 

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrl);
  }

  createMember(member: Member): Observable<any> {
    return this.http.post(this.apiUrl, member);
  }

  updateMember(id: number, member: Member): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, member);
  }

  deleteMember(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}