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
  }
  onSwipeDown() {
    console.log('SWIPE DOWN');
  }
}

export enum ScreenAction {
  stop,
  swipeUp,
  swipeDown
}

export var currentScreenAction:ScreenAction = ScreenAction.stop;

export function setCurrentScreenAction(action:ScreenAction){
  //currentScreenAction = action;
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


