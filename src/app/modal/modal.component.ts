import { Component, OnInit } from '@angular/core';
import { HelpService } from '../services/help.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  display:boolean=false;

  constructor(
    public helpService: HelpService
  ) {}

  ngOnInit() {
  }

}
