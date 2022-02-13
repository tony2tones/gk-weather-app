import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { CelcuisConverter } from './celcuis-converter.directive';
import { Mocks } from './mocks/mock-data';
import { MockApiService } from './mocks/mock-services';
import { WeatherService } from './weather.service';

const mockSuccess = (success, error) => {
  success({ coords: Mocks.position.coords });
  error({ error: 'error message' });
}

const mockGetcurrentPosition = jest.fn(mockSuccess);

const mockSuccessHandler = jest.fn(() => Mocks.position.coords);

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let navigatorMock;
  let spy: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, CelcuisConverter
      ],
      imports: [BrowserModule, HttpClientModule],
      providers: [
        { provide: WeatherService, useClass: MockApiService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    // @ts-ignore
    global.navigator.geolocation = { getCurrentPosition: mockGetcurrentPosition }
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  }));

  afterAll(() => {
    // @ts-ignore
    global.navigator.geolocation = global.navigator.geolocation;
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
    expect()
  });

  describe('Check that forecast is populated via the weather service', () => {
    let getForecastSpy;
    let successHandlerSpy;
    let errorHandlerSpy;
    let dateFormatterSpy;
    let getWeatherSpy;

    beforeEach(() => {
      getWeatherSpy = jest.spyOn(component, 'getWeather');
      getForecastSpy = jest.spyOn(component, 'getForecast');
      successHandlerSpy = jest.spyOn(component, 'successHandler');
      errorHandlerSpy = jest.spyOn(component, 'errorHandler');
      dateFormatterSpy = jest.spyOn(component, 'dateFormatter');
      component.successHandler(Mocks.position);
      fixture.detectChanges();
    })


    it(`should have as title 'gk-weather-app'`, () => {
      expect(successHandlerSpy).toHaveBeenCalled();
      expect(getWeatherSpy).toHaveBeenCalledWith(Mocks.position);
      expect(mockGetcurrentPosition).toHaveBeenCalled();
      fixture.detectChanges();
    });
  });

  describe('toggle test', () => {
    let toggleRestOfWeekSpy;

    beforeEach(() => {
      toggleRestOfWeekSpy = jest.spyOn(component,'toggleRestOfWeek');
      component.toggleRestOfWeek();
      fixture.detectChanges();
    });

    it('should trigger the toggle', () => {
      expect(toggleRestOfWeekSpy).toHaveBeenCalled();
      expect(component.restOfWeekToggle).toBe(false);
    });
  });

  describe('refresh toggle test', () => {
    let refreshSpy;
    let resetForecastSpy;

    beforeEach(() => {
      refreshSpy = jest.spyOn(component,'refresh');
      resetForecastSpy = jest.spyOn(component,'resetForecast');
      component.ngOnInit();
      component.refresh();
      fixture.detectChanges();
    });

    it('should trigger the toggle', () => {
      expect(refreshSpy).toHaveBeenCalled();
      expect(resetForecastSpy).toHaveBeenCalled();
    });
  });
});
