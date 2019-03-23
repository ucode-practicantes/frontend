import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onSwipeUp() {
    console.log('User record starts');
  }
  onSwipeDown() {
    console.log('User record starts');
  }
}
