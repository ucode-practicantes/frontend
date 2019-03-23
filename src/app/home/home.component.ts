import { Component, OnInit } from '@angular/core';
import {speech, ScreenAction, getCurrentScreenAction} from '../app.component'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(speech.hasBrowserSupport()) { // returns a boolean
      console.log("speech synthesis supported")
      speech.speak({
        text: 'Hello, welcome to XXXAPP. Do you know how to use me? Scroll up in affirmative case. Scroll down otherwise.',
      })
      var currentScreenAction
      /*do{
        currentScreenAction = getCurrentScreenAction()
      }while(currentScreenAction !== ScreenAction.swipeUp && currentScreenAction !== ScreenAction.swipeDown);
      if(currentScreenAction === ScreenAction.swipeUp){
        //TODO: RES DE TUTORIALS
      }else if(currentScreenAction === ScreenAction.swipeDown){
        //TODO: TUTORIAL HERE
      }*/
      
    }else{
      console.log("speech synthesis supported")
    }
  }
}
