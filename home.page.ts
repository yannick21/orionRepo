import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

backgroundTable = ['b1', 'b2', 'b3', 'b4', 'b5'];
background: string;

  constructor() {
    this.background =  this.backgroundTable[Math.floor(Math.random() * Math.floor(5))];
  }

}
