import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
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
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, CelcuisConverter
      ],
      imports: [BrowserModule, HttpClientModule],
      providers:[
        {provide: WeatherService, useClass: MockApiService},
        {provide: global.navigator.geolocation, useValue: mockGetcurrentPosition},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    // global.navigator.geolocation = { getCurrentPosition: mockGetcurrentPosition }
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  }));
  
  it('should create the app', () => {
        // navigatorMock = spyOn(global.navigator.geolocation, 'getCurrentPosition').and.callFake({getCurrentPosition: mockGetcurrentPosition});
        expect(component).toBeTruthy();
      });
      
      it(`should have as title 'gk-weather-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('gk-weather-app');
  });
});
