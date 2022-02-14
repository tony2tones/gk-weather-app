import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsComponent } from './notifications.component';

describe('NotificationsComponent', () => {
  let component: NotificationsComponent;
  let fixture: ComponentFixture<NotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Assertion of the event emitter', () => {
    let emitterSpy;
    let refreshBtnSpy;

    beforeEach(() => {
      emitterSpy = jest.spyOn(component.submitRefresh, 'emit');
      refreshBtnSpy = jest.spyOn(component,'refreshClicked');
      component.refreshClicked();
      fixture.detectChanges();
    });

    it('should emitt a value', () => {
      expect(emitterSpy).toHaveBeenCalledWith(true);
      expect(refreshBtnSpy).toHaveBeenCalled();
    })
  })
});
