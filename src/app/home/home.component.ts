import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import {speech, AppComponent} from '../app.component';
import { MlServiceService } from '../ml-service.service';


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
    console.log('User record starts');
    this.exerciseService.activeRecord();
    /*currentScreenAction = ScreenAction.swipeUp
    speech.speak({
      text: 'Record starts.'
    }) */
  }
  onSwipeDown() {
    console.log('User record ends');
    this.exerciseService.desactiveRecord();
    /*currentScreenAction = ScreenAction.swipeDown
    speech.speak({
      text: 'Record finishes.'
    })*/
  }

  ngOnInit() {
    if(!this.getPresentationDone()){
      speech.speak({
        text: 'Hello, welcome to XXXAPP. Do you know how to use me? If you have any doubt, mantain pressed for 3 seconds. ',
      });  
      this.makePresentation();
    }
  }
}
