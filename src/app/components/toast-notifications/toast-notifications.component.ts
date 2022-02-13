import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast-notifications',
  templateUrl: './toast-notifications.component.html',
  styleUrls: ['./toast-notifications.component.css']
})
export class ToastNotificationsComponent {
  @Input() title: string;

  @Input() errorMsg: string;


}
