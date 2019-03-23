import { Component, OnInit } from '@angular/core';
import {speech} from '../../main'

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
    }else{
      console.log("speech synthesis supported")
    }
  }
}
