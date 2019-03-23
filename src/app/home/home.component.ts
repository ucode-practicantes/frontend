import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import {speech, cancelSpeech} from '../app.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public exerciseService: ExerciseService) { }

  getPresentationDone(){
    return this.exerciseService.presentationDone
  }

  makePresentation(){
    this.exerciseService.makePresentation()
  }

  onSwipeUp() {
    cancelSpeech();
    console.log('User record starts');
    this.exerciseService.activeRecord();
    speech.speak({
      text: 'Record starts.'
    }) 
  }

  ngOnInit() {
    if(!this.getPresentationDone()){
      cancelSpeech();
      speech.speak({
        text: 'Hello, welcome to XXXAPP. Do you know how to use me? If you have any doubt, mantain pressed for 3 seconds. ',
      });  
      this.makePresentation();
    }
  }
}
