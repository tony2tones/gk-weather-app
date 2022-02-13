import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Forecast, List, Position } from 'src/models/forecast.models';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'gk-weather-app';

  public errorTitle: string = '';

  public isLoading: boolean = true;

  public restOfWeekToggle: boolean = true;

  public hasLoaded: boolean = false;

  public errorMsg: string = '';

  public todayDate: string = '';

  public forecast: Forecast = <Forecast>{};

  public weekForecast: List[] = [];

  public dayCount: number = 0;

  public currentMonth: string = '';

  public forcastToday: List = <List>{};

  public cityName: string = '';

  public descriptionDay: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    if (!navigator.geolocation) {
      this.isLoading = false;
      console.log('is this working ');
      this.errorTitle = 'An error has occurred'
      this.errorMsg = 'geolocation not supported';
    }
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
    console.log(err);
    this.errorMsg = err.statusText;
    this.errorTitle = err.name;
    // if (err.status === 401) {
    //   this.errorTitle = 'Unauthorized'
    //   this.errorMsg = 'You are not authorized to access the weather API please check your API key';
    // }
    // if (err.status === 404) {
    //   this.errorTitle = 'Http failed to response'
    //   this.errorMsg = 'Request for weather has failed, plaese try again later';
    // }
    // if (err.status === 500) {
    //   this.errorTitle = 'Server error'
    //   this.errorMsg = 'Server appears to be offline, please try again later..';
    // }

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
    // this.isLoading = true;
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
  // CHECK THIS FUNCTION 
  public futureDateFormatter(weeklyForcast: List[]) {
    for (let i = 0; i < weeklyForcast.length; i++) {
      // Add date day to the day of the week data collection
      let dayOfweek = new Date(Date.now() + (i) * 86400000);
      weeklyForcast[i].date = dayOfweek.getDate();
    }
  }

  public toggleRestOfWeek() {
    this.restOfWeekToggle = !this.restOfWeekToggle;
  }

  public resetForecast(): void {
    this.forecast = <Forecast>{};
  }

  public refresh(): void {
    this.resetForecast
    window.location.reload();
}
}
