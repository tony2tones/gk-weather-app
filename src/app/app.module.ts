import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HttpClientModule } from '@angular/common/http';
import { CelcuisConverter } from './celcuis-converter.directive';
import { WeekWeatherComponent } from './components/week-weather/week-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    CelcuisConverter,
    WeekWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    // MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
