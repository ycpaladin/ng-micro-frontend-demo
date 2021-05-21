import { Component } from '@angular/core';

@Component({
  selector: 'cy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'business-mgmt';
}


@Component({
  selector: 'cy-business-root',
  template: '<router-outlet></router-outlet>'
})
export class AppRootComponent {

}
