import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  private apiUrl = 'https://dev.grantitan.com/wp-json/wp/v2/listas';

  constructor(private http: HttpClient) {}

  getListas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
