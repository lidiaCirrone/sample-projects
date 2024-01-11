import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// environments
import { environment } from '../../environments/environment';

// models
import { WeatherData } from '../models/weather.model';
import { SearchData } from '../models/search.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(latitude: string, longitude: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiForecastBaseURL, {
      params: new HttpParams()
        .set('latitude', latitude)
        .set('longitude', longitude)
        .set('current', 'temperature_2m,relative_humidity_2m,wind_speed_10m')
        .set('daily', 'temperature_2m_max,temperature_2m_min'),
    });
  }

  getCityCoordinates(city: string): Observable<SearchData> {
    return this.http.get<SearchData>(environment.weatherApiSearchBaseURL, {
      params: new HttpParams().set('name', city),
    });
  }
}
