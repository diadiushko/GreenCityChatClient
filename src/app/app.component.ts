import { Component } from '@angular/core';
import {UserEmulateService} from './main/service/user-emulate-service/user-emulate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
      public userService: UserEmulateService
  ) {}
}
