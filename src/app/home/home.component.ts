import { Component, OnInit } from '@angular/core';
import {speech, ScreenAction, getCurrentScreenAction} from '../app.component'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(){
    if(speech.hasBrowserSupport()) { // returns a boolean
      console.log("speech synthesis supported")
      speech.speak({
        text: 'Hello, welcome to XXXAPP. Do you know how to use me? If you have any doubt, mantain pressed for 3 seconds. ',
      })     

    }else{
      console.log("speech synthesis supported")
    }
  }
}
