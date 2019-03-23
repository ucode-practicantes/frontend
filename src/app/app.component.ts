import { Component, OnInit } from '@angular/core';
import { ExerciseService } from './services/exercise.service';
import Speech from 'speak-tts';
import { MlServiceService } from './ml-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(
    public exerciseService: ExerciseService,
    private mlService: MlServiceService
    ) {}

  public uploadData() {
    this.mlService.predict([]);
  }

  onPress(){
    helpDisplayed = true;
    cancelSpeech();
    console.log('User presses');
    speech.speak({
      text: 'Now you are in the help menu. \
      To start recording, swipe up your finger on the screen. \
      To finish recording, swipe down your finger on the screen.'
      //TODO TUTORIAL
    })  
  }
}

export var helpDisplayed = false;

export function cancelSpeech(){
  speech.cancel();
  helpDisplayed = false;
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


