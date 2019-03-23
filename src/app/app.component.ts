import { Component } from '@angular/core';
import { ExerciseService } from './services/exercise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public exerciseService: ExerciseService) {}

  onSwipeUp() {
    console.log('User record starts');
    this.exerciseService.activeRecord();
  }
  onSwipeDown() {
    console.log('User record ends');
    this.exerciseService.desactiveRecord();
  }
}
