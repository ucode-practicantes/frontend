import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  hour: number = 0;
  minute: number = 0;
  second: number = 0;
  stopped = false;

  interval;

  constructor(public exerciseService: ExerciseService) {
  }

  ngOnInit() {
    this.start();
  }

  start() {
    this.interval = setInterval( () => {
      this.second += 1;
      if (this.second == 60) {
        this.second = 0;
        this.minute += 1;
        if (this.minute == 60) {
          this.minute = 0;
          this.hour += 1;
          if (this.hour = 24) {
            this.stop();
          }
        }
      }
    }, 1000);
  }

  resume() {
    if(this.stopped) {
      this.stopped = false;
      this.start();
    }
  }

  stop() {
    this.stopped = true;
    clearInterval(this.interval);
  }

  onSwipeDown() {
    console.log('User record ends');
    this.exerciseService.desactiveRecord();
    /*currentScreenAction = ScreenAction.swipeDown
    speech.speak({
      text: 'Record finishes.'
    })*/
  }
}
