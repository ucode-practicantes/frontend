import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {

  constructor(public exerciseService: ExerciseService) { }

  ngOnInit() {
  }

  onSwipeLeft() {
    this.exerciseService.activeHome();
  }
}
