import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { throwError } from 'rxjs';
import { AppComponent } from './app.component';
import { CelcuisConverter } from './directives/celcuis-converter.directive';
import { Mocks } from './mocks/mock-data';
import { MockApiService } from './mocks/mock-services';
import { WeatherService } from './services/weather.service';

const mockSuccess = (success, error) => {
  success({ coords: Mocks.position.coords });
  error({ error: 'error message' });
}

const mockGetcurrentPosition = jest.fn(mockSuccess);

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let weatherService: WeatherService;

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

    const location: Location = window.location;
    delete window.location;
    window.location = {
      ...location,
      reload: jest.fn()
    };
    weatherService = TestBed.inject(WeatherService);
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
    });

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
      toggleRestOfWeekSpy = jest.spyOn(component, 'toggleRestOfWeek');
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
      refreshSpy = jest.spyOn(component, 'refresh');
      resetForecastSpy = jest.spyOn(component, 'resetForecast');
      component.ngOnInit();
      component.refresh();
      fixture.detectChanges();
    });

    it('should trigger the toggle', () => {
      expect(refreshSpy).toHaveBeenCalled();
      expect(resetForecastSpy).toHaveBeenCalled();
    });
  });

  describe('errorHandler check', () => {
    let errorHandlerSpy;

    beforeEach(() => {
      errorHandlerSpy = jest.spyOn(component, 'errorHandler');
      component.errorHandler(Mocks.errorResponse);
      fixture.detectChanges();
    });

    test('check and assert Mocks.errorResponseor message', () => {
      expect(errorHandlerSpy).toHaveBeenCalledWith(Mocks.errorResponse);
      expect(component.isLoading).toBe(false);
      jest.restoreAllMocks();
      window.location = location;
    });
  });

  describe('getWeather error check', () => {
    let errorHandlerSpy;
    let getWeatherSpy;
    const error: HttpErrorResponse = {
      status: 401,
      message: 'UnAuthorized',
    } as HttpErrorResponse;

    beforeEach(() => {
      errorHandlerSpy = jest.spyOn(component, 'errorHandler');
      getWeatherSpy = jest.spyOn(weatherService, 'getWeather').mockReturnValue(throwError(error));
      component.getForecast();
      fixture.detectChanges();
    });

    test('check and assert Mocks.errorResponseor message', () => {
      expect(errorHandlerSpy).toHaveBeenCalledWith(error);
      expect(getWeatherSpy).toHaveBeenCalled();
      expect(component.isLoading).toBe(false);
    });
  });

});
