import { Component, OnInit } from '@angular/core';

const IMAGES: string[] = [
  './assets/img/mario-icons/Blooper.png',
  './assets/img/mario-icons/Boo.png',
  './assets/img/mario-icons/Bullet Bill.png',
  './assets/img/mario-icons/Chain Chomp.png',
  './assets/img/mario-icons/Goomba.png',
  './assets/img/mario-icons/Mushroom - 1UP.png',
  './assets/img/mario-icons/Mushroom - Mega.png',
  './assets/img/mario-icons/Paper Mario.png',
];

const MAX_SCORE: number = 1000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  amountOfTiles: number = 0;

  images: string[] = [];
  activeImage: string = '';
  openImageIdList: number[] = [];
  score: number = 0;
  turn: number = 0;
  gameFinished: boolean = false;
  imageSource: string = './assets/img/mario-win.jpg';
  imageAlt: string = 'Mario Win Image';

  ngOnInit(): any {
    this.images = [...IMAGES, ...IMAGES];
    this.onNewGame();
    this.amountOfTiles = this.images.length;
  }

  onNewGame(): void {
    this.score = 0;
    this.turn = 0;
    this.gameFinished = false;
    this.images = this.shuffleArray(this.images);
    this.openImageIdList = [];
  }

  shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  onSelectCard(image: string, index: number): void {
    this.turn++;
    switch (this.activeImage) {
      case '':
        this.openImageIdList.push(index);
        this.activeImage = image;
        break;
      case image:
        this.openImageIdList.push(index);
        this.activeImage = '';
        this.calculateScore();
        if (this.openImageIdList.length === this.amountOfTiles) {
          this.gameFinished = true;
        }
        break;
      default:
        this.openImageIdList.push(index);
        this.closeImages(index);
        this.activeImage = '';
    }
  }

  calculateScore(): void {
    const modifier: number =
      this.turn < this.amountOfTiles
        ? this.turn / this.amountOfTiles
        : this.amountOfTiles / this.turn;

    this.score = Math.ceil(modifier * MAX_SCORE);
  }

  private closeImages(index: number): number {
    return setTimeout(() => {
      this.openImageIdList.splice(this.openImageIdList.indexOf(index) - 1, 2);
    }, 1000);
  }
}
