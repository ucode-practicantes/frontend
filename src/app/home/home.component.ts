import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { HelpService } from '../services/help.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public exerciseService: ExerciseService, public helpService: HelpService) { }

  getPresentationDone(){
    return this.exerciseService.presentationDone
  }

  makePresentation(){
    this.exerciseService.makePresentation()
  }

  onSwipeUp() {
    this.helpService.cancelSpeech();
    console.log('User record starts');
    this.exerciseService.activeRecord();
    this.helpService.speak('Record starts.'); 
  }

  ngOnInit() {
    if(!this.getPresentationDone()){
      this.helpService.cancelSpeech();
      this.helpService.speak('Hello, welcome to XXXAPP. \
        Do you know how to use me? If you have any doubt, mantain pressed for 3 seconds. ');  
      this.makePresentation();
    }
  }
}
