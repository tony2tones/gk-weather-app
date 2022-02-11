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

  public isLoading: boolean = true;

  public hasLoaded: boolean = false;

  public errorMsg: string = '';

  public todayDate: string = '';

  public forecast: Forecast = <Forecast>{};

  public weekForecast: List[] = [];

  public sortedForecast: List[] = [];

  public dayCount: number = 0;

  public forcastToday:List = <List>{};

  // public todayMax: number = 0;

  // public todayMin: number = 0;

  // public todayTemp: number = 0;

  public cityName: string = '';

  public descriptionDay: string = "";

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
    let year = dateValue.getFullYear();
    this.todayDate = `${day} ${month} ${year}`;
  }

  public getWeather(position: Position): void {
    // this.isLoading = true;
    this.weatherService.getWeather(position.coords.latitude, position.coords.longitude, this.dayCount)
      .subscribe((response: Forecast) => {
        this.forecast = response;
        this.cityName = this.forecast.city.name;
        const [todaysForcast, ...restOfWeekForCast] = this.forecast.list;

        this.futureDateFormatter(restOfWeekForCast);
        this.futureDateFormatter([this.forcastToday]);
        this.forcastToday = todaysForcast;
        this.weekForecast = restOfWeekForCast;
        this.dateFormatter();
        console.log('REST OF WEEK TO SUBMIT TO COMPONBENT',this.weekForecast);
        // this.isLoading = false;
      },
        (error: any) => {
          this.errorHandler(error);
          // this.isLoading = false;
        });
  }
  // CHECK THIS FUNCTION 
  public futureDateFormatter(weeklyForcast: List[]) {
    // let index = 1;
    for (let i = 0; i < weeklyForcast.length; i++) {
      // Add date day to the day of the week data collection
      let dayOfweek = new Date(Date.now() + (i) * 86400000);
      weeklyForcast[i].day = dayOfweek.getDate();
    }
    // this.sortedForecast = weeklyForcast;

  }

  // public setRestOfWeekForecast(weeklyForcast: List[]): void {
  //   console.log(weeklyForcast.length);
  //   weeklyForcast.shift();
  //   // console.log('weekly',weeklyForcast)
  //   this.futureDateFormatter(weeklyForcast);
  // }

  public resetForecast(): void {
    this.forecast = <Forecast>{};
  }
}
