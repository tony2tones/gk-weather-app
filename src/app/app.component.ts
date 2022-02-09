import { Component, OnInit } from '@angular/core';
import { Forecast, List, Position } from 'src/models/forecast.models';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'gk-weather-app';

  public errorMsg: string = '';

  public todayDate:string = '';

  public forecast: Forecast = <Forecast>{};

  public weekForecast: List[] = [];

  public sortedForecast: List[] = [];

  public dayCount: number = 0;

  public todayMax: number = 0;

  public todayMin: number = 0;

  public cityName: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    if (!navigator.geolocation) {
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

  public errorHandler(err: any) {
    console.log(err);
  }

  public dateFormatter(): void {
    const dateValue: Date = new Date();
    let day = dateValue.getDate();
    let month = dateValue.toLocaleString('default', { month: 'short' });
    this.todayDate = `${day} ${month}`;
  }

  public getWeather(position: Position): void {
    // this.isLoading = true;
    this.weatherService.getWeather(position.coords.latitude, position.coords.longitude, this.dayCount)
      .subscribe((response: Forecast) => {
        this.forecast = response;
        this.cityName = this.forecast.city.name;
        this.weekForecast = this.forecast.list;
        this.todayMax = this.weekForecast[0].temp.max;
        this.todayMin = this.weekForecast[0].temp.min;

        this.setRestOfWeekForecast(this.weekForecast);
        this.dateFormatter();
        // this.isLoading = false;
      },
        (error: any) => {
          this.errorHandler(error);
          // this.isLoading = false;
        });
  }
  public futureDateFormatter(weeklyForcast: List[]) {
    let restOfWeek = weeklyForcast;
    let index = 1;
    for (let i = 0; i < restOfWeek.length; i++) {
      // Add date day to the day of the week data collection
      let dayOfweek = new Date(Date.now() + (index + i) * 86400000);
      restOfWeek[i].day = dayOfweek.getDate();
    }
    this.sortedForecast = restOfWeek;
  }

  public setRestOfWeekForecast(weeklyForcast: List[]): void {
    weeklyForcast.shift();
    this.futureDateFormatter(weeklyForcast);
  }

  public resetForecast(): void {
    this.forecast = <Forecast>{};
  }
}
