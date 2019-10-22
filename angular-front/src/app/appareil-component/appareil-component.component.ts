import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-appareil-component',
  templateUrl: './appareil-component.component.html',
  styleUrls: ['./appareil-component.component.scss']
})
export class AppareilComponentComponent implements OnInit {
  appareilName: string = 'Machine à laver';
  appareilStatus: string = 'Éteint';

  constructor() {
  }

  ngOnInit() {
  }

  getStatus(): string {
    return "éteint";
  }
}
