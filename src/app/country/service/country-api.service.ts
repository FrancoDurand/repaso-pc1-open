import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  apiUrl = "https://calendarific.com/api/v2/countries?api_key=A773dpPxZ8jdui4aQuFW68INTVRLGg31"

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
