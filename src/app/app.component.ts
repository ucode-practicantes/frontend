import { Component } from '@angular/core';
import { ExerciseService } from './services/exercise.service';
import Speech from 'speak-tts';

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
    currentScreenAction = ScreenAction.swipeUp
  }
  onSwipeDown() {
    console.log('User record ends');
    this.exerciseService.desactiveRecord();
    currentScreenAction = ScreenAction.swipeDown
  }
  onPress(){
    console.log('User presses');
    currentScreenAction = ScreenAction.press
    speech.speak({
      text: 'Hello. Now you are in the help menu. To start recording, swip up your finger in the screen. \
      To finish recording, swuip down your finger in the screen.',
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


