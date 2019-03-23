import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  recordStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);
  presentationDone:boolean = false;

  constructor() { }

  activeRecord() {
    this.recordStatus.next(true);
  }

  desactiveRecord() {
    this.recordStatus.next(false);
  }

  makePresentation(){
    this.presentationDone = true;
  }

}
