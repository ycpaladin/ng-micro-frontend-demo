import { Component } from '@angular/core';

@Component({
  selector: 'cy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workbench';
}

@Component({
  selector: 'cy-workbench-root',
  template: '<router-outlet></router-outlet>'
})
export class AppRootComponent {

}
