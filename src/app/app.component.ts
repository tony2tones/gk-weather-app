import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Forecast, List, Position } from './models/forecast.models';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'weather-app';

  public errorTitle: string = '';

  public isLoading: boolean = true;

  public errorMsg: string = '';

  public restOfWeekToggle: boolean = true;

  public hasLoaded: boolean = false;

  public todayDate: string = '';

  public forecast: Forecast = <Forecast>{};

  public weekForecast: List[] = [];

  public dayCount: number = 7;

  public currentMonth: string = '';

  public forcastToday: List = <List>{};

  public cityName: string = '';

  public descriptionDay: string = '';

  constructor(private weatherService: WeatherService) { }

  public ngOnInit(): void {
    this.getForecast();
  }

  public getForecast(): void {
    navigator.geolocation.getCurrentPosition(
      this.successHandler.bind(this),
      this.errorHandler.bind(this),
    )
  }

  public successHandler(postion: Position): void {
    this.getWeather(postion);
  }

  public errorHandler(err: HttpErrorResponse) {
    this.isLoading = false;
    this.errorTitle = err.name;
    this.errorMsg = err.statusText ? err.statusText : err.message;
  }

  public dateFormatter(): void {
    const dateValue: Date = new Date();
    let day = dateValue.getDate();
    let month = dateValue.toLocaleString('default', { month: 'short' });
    let year = dateValue.getFullYear();
    this.currentMonth = month;
    this.todayDate = `${day} ${month} ${year}`;
  }

  public getWeather(position: Position): void {
    this.weatherService.getWeather(position.coords.latitude, position.coords.longitude, this.dayCount)
      .subscribe((response: Forecast) => {
        this.forecast = response;
        this.cityName = this.forecast.city.name;
        const [todaysForcast, ...restOfWeekForCast] = this.forecast.list;
        const [descpt] = todaysForcast.weather;
        this.descriptionDay = descpt.description;
        this.forcastToday = todaysForcast;
        this.weekForecast = restOfWeekForCast;

        this.futureDateFormatter(this.weekForecast);
        this.dateFormatter();
        this.isLoading = false;
      },
        (error: any) => {
          this.errorHandler(error);
          this.isLoading = false;
        });
  }

  public futureDateFormatter(weeklyForcast: List[]): void {
    for (let i = 0; i < weeklyForcast.length; i++) {
      // Add date day to the day of the week data collection
      let dayOfweek = new Date(Date.now() + (i + 1) * 86400000);
      weeklyForcast[i].date = dayOfweek.getDate();
    }
  }

  public toggleRestOfWeek(): void {
    this.restOfWeekToggle = !this.restOfWeekToggle;
  }

  public resetForecast(): void {
    this.forecast = <Forecast>{};
  }

  public refresh(): void {
    this.resetForecast();
    window.location.reload();
  }
}
