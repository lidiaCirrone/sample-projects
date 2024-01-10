import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(latitude: string, longitude: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseURL, {
      params: new HttpParams()
        .set('latitude', latitude)
        .set('longitude', longitude)
        .set('current', 'temperature_2m,relative_humidity_2m,wind_speed_10m')
        .set('daily', 'temperature_2m_max,temperature_2m_min'),
    });
  }
}
