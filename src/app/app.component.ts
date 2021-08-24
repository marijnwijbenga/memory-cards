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

  ngOnInit(): any {
    this.logCards();
  }

  logCards(): any {
    console.log(this.cards)
  }

}
