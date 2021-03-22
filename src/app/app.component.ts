import { Component } from '@angular/core';
import { LoginItemService} from './login-item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DeviceApp';
  constructor(private loginItemService: LoginItemService){}
  logged = this.loginItemService.logged;
}
