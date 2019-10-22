import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.scss']
})
export class MonPremierComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.constructor.name, "iniated !")
  }

}
