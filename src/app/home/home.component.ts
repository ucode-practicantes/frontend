import { Component, OnInit } from '@angular/core';
import Speech from 'speak-tts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const speech = new Speech() // will throw an exception if not browser supported
    if(speech.hasBrowserSupport()) { // returns a boolean
      console.log("speech synthesis supported")
      speech.init().then((data) => {
        // The "data" object contains the list of available voices and the voice synthesis params
        console.log("Speech is ready, voices are available", data)
      }).catch(e => {
          console.error("An error occured while initializing : ", e)
      })

      speech.init({
        'volume': 1,
           'lang': 'es',
           'rate': 1,
           'pitch': 1,
           'voice':'Google español',
           'splitSentences': true,
           'listeners': {
               'onvoiceschanged': (voices) => {
                   console.log("Event voiceschanged", voices)
               }
           }
      })

      speech.speak({
        text: 'Hello, how are you today ?',
      }).then(() => {
        console.log("Success !")
      }).catch(e => {
         console.error("An error occurred :", e)
      })


    }else{
      console.log("speech synthesis supported")
    }
  }

}
