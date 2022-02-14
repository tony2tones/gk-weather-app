import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CelcuisConverter } from '../../celcuis-converter.directive';

import { WeekWeatherComponent } from './week-weather.component';

describe('WeekWeatherComponent', () => {
  let component: WeekWeatherComponent;
  let fixture: ComponentFixture<WeekWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekWeatherComponent, CelcuisConverter ],
      imports:[]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('check that value has been emitted', () => {
    let emitterSpy;
    let ngAfterViewCheckedSpy;

    beforeEach(() => {
      emitterSpy = jest.spyOn(component.renderingComplete, 'emit');
      ngAfterViewCheckedSpy = jest.spyOn(component,'ngAfterViewChecked');
      // component.submitRefresh.emit(true);
      component.ngAfterViewChecked();
      fixture.detectChanges();
    });

    it('should emitt a value', () => {
      expect(emitterSpy).toHaveBeenCalledWith(true);
      expect(ngAfterViewCheckedSpy).toHaveBeenCalled();
    })
  })
});
