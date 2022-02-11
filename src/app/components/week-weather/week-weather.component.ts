import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-week-weather',
  templateUrl: './week-weather.component.html',
  styleUrls: ['./week-weather.component.css']
})
export class WeekWeatherComponent {
  @Input() todayTemp: number = 0;
  
  @Input() minTemp: number = 0;

  @Input() maxTemp: number = 0;

  @Input() index: number = 0;

  @Input() dateOfWeek: number = 0;

  @Output() renderingComplete: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngAfterViewChecked() {
    this.renderingComplete.emit(true);
   }

  ngOnInit(): void {
  }

}
