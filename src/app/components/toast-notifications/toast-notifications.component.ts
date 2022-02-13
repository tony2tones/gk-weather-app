import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toast-notifications',
  templateUrl: './toast-notifications.component.html',
  styleUrls: ['./toast-notifications.component.css']
})
export class ToastNotificationsComponent {
  @Input() title: string;

  @Input() errorMsg: string;

  @Output() submitRefresh = new EventEmitter<boolean>();

  public refreshClicked() {
    this.submitRefresh.emit(true);
  }
}
