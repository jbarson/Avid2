import { Component } from '@angular/core';
import { AttitudeComponent } from './attitude/attitude.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [AttitudeComponent]
})
export class AppComponent {
  foo = 'thing';
}
