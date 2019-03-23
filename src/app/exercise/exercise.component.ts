import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { speech, AppComponent } from '../app.component'
import { ExerciseService } from '../services/exercise.service';


@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent extends AppComponent implements OnInit {
  hour: number = 0;
  minute: number = 0;
  second: number = 0;

  interval;

  constructor(public exerciseService: ExerciseService) { super(exerciseService); }

  onSwipeUp() {
    console.log('Say time');
    var sentence:String = 'Your are playing for ';
      if(this.hour > 0){
        sentence += this.hour + ' hours, ';
      } 
      if(this.minute > 0){
        sentence += this.minute + ' minutes, ';
      }
      if(this.hour>0 || this.minute>0){
        sentence += 'and ';
      }
      sentence += this.second + 'seconds';
    speech.speak({
      text: sentence
    }) 
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
    this.start();
  }

  stop() {
    clearInterval(this.interval);
  }

}
