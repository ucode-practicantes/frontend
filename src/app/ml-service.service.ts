import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MlServiceService {
  private API_URL = environment.api;

  constructor(private httpClient: HttpClient) { }

  public helloWord(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/`);
  }

  public predict(data: number[]): Observable<string> {
    return this.httpClient.post<string>(`${this.API_URL}/predict`, {});
  }
}
