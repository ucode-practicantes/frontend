import { Component } from '@angular/core';
import { ExerciseService } from './services/exercise.service';
import Speech from 'speak-tts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export abstract class AppComponent {

  constructor(public exerciseService: ExerciseService) {}

  abstract onSwipeUp();

  onSwipeDown() {
    console.log('User record ends');
    this.exerciseService.desactiveRecord();
    currentScreenAction = ScreenAction.swipeDown
    speech.speak({
      text: 'Record finishes.'
    })
  }
  onPress(){
    console.log('User presses');
    currentScreenAction = ScreenAction.press
    speech.speak({
      text: 'Now you are in the help menu. \
      To start recording, swipe up your finger on the screen. \
      To finish recording, swipe down your finger on the screen.'
      //TODO TUTORIAL
    })  
  }
}

export enum ScreenAction {
  stop,
  swipeUp,
  swipeDown,
  press
}


var currentScreenAction:ScreenAction = ScreenAction.stop;

export function getCurrentScreenAction(){
  const tmp = currentScreenAction
  currentScreenAction = ScreenAction.stop
  return tmp;
}

export const speech = new Speech()
speech.init(
  {
    'onVoicesLoaded': (data) => {console.log('voices', data.voices)},
    'volume': 1,
    'lang': 'en-GB',
    'rate': 1,
    'pitch': 1,
    'voice':'Microsoft Zira Desktop - English (United States)',
    'splitSentences': true,

  }
).then((data) => {
  // The "data" object contains the list of available voices and the voice synthesis params
  console.log("Speech is ready, voices are available", data)
}).catch(e => {
    console.error("An error occured while initializing : ", e)
})


