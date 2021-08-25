import {Component, OnInit} from '@angular/core';
import {CARDS} from "./constants/cards";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'memory-cards';
  cards = CARDS;
  emptyGridArray: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  ngOnInit(): any {
    this.logCards();
  }

  randomNumber(): number {
    return Math.floor(Math.random() * 8)
  }

  logCards(): any {
    console.log(this.cards)
  }

}
