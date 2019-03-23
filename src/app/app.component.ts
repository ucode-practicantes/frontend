import { Component } from '@angular/core';
import Speech from 'speak-tts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  onSwipeUp() {
    console.log('SWIPE UP');
    currentScreenAction = ScreenAction.swipeUp
  }
  onSwipeDown() {
    console.log('SWIPE DOWN');
    currentScreenAction = ScreenAction.swipeUp
  }
}

export enum ScreenAction {
  stop,
  swipeUp,
  swipeDown
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


