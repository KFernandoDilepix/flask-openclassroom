import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isAuth: boolean = true;

  constructor() {
    setTimeout(() => {this.isAuth = false}, 4000);
  }
}
