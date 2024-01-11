import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

// models
import { WeatherData } from './models/weather.model';

// services
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  chosenCity: string = 'Turin';
  inputCity: string = 'Turin';
  latitude: string = '45.0705';
  longitude: string = '7.6868';
  showCredits: boolean = false;
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.latitude, this.longitude);
    this.inputCity = '';
  }

  onSubmit() {
   //  console.log('submitting...');
    this.getCityCoordinates(this.inputCity);
    this.inputCity = '';
  }

  toggleCredits() {
   console.log(this.showCredits);
   this.showCredits = !this.showCredits;
  }

  private getWeatherData(latitude: string, longitude: string) {
    this.weatherService.getWeatherData(latitude, longitude).subscribe({
      next: (response) => {
      //   console.log('forecast response', response);
        this.weatherData = response;
      },
    });
  }

  private getCityCoordinates(city: string) {
    this.weatherService.getCityCoordinates(city).subscribe({
      next: (response) => {
        try {
         //  console.log('search response', response.results[0]);
          this.latitude = response.results[0].latitude.toString();
          this.longitude = response.results[0].longitude.toString();
          this.getWeatherData(this.latitude, this.longitude);
          this.chosenCity = city;
        } catch (error) {
          console.log('search error', error);
          this.weatherData = undefined;
        }
      },
    });
  }
}
