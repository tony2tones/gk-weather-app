import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  @Input() title: string;

  @Input() errorMsg: string;

  @Output() submitRefresh = new EventEmitter<boolean>();

  public refreshClicked() {
    this.submitRefresh.emit(true);
  }
}
