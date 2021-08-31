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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  TILES_AMOUNT: number = 0;

  images: string[] = [];
  activeImage: string = '';
  openImageIdList: number[] = [];
  score: number = 0;
  turn: number = 0;
  gameFinished: boolean = false;

  ngOnInit(): any {
    this.images = [...IMAGES, ...IMAGES];
    this.refresh();
    this.TILES_AMOUNT = this.images.length;
  }

  refresh() {
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
        this.addScore(this.turn);
        if (this.openImageIdList.length === this.TILES_AMOUNT) {
          this.gameFinished = true;
        }
        break;
      default:
        this.openImageIdList.push(index);
        this.closeImages(index);
        this.activeImage = '';
    }
  }

  addScore(turns: number): number {
    return turns < this.TILES_AMOUNT
      ? (this.score = Math.ceil((turns / this.TILES_AMOUNT) * 1000))
      : (this.score = Math.ceil((this.TILES_AMOUNT / turns) * 1000));
  }

  private closeImages(index: number): number {
    return setTimeout(() => {
      this.openImageIdList.splice(this.openImageIdList.indexOf(index) - 1, 2);
    }, 1000);
  }
}
