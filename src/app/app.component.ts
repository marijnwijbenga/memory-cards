import { Component, OnInit } from '@angular/core';

const IMAGES: string[] = [
  './assets/img/mario-icons/Blooper.png',
  './assets/img/mario-icons/Boo.png',
  './assets/img/mario-icons/Bullet Bill.png',
  './assets/img/mario-icons/Chain Chomp.png',
  './assets/img/mario-icons/Goomba.png',
  './assets/img/mario-icons/Mushroom - 1UP.png',
  './assets/img/mario-icons/Mushroom - Mega.png',
  './assets/img/mario-icons/Paper Mario.png'
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  images: string[] = [];
  activeImage: string = '';
  openImageIdList: number[] = [];

  ngOnInit(): any {
    this.images = [...IMAGES, ...IMAGES];
    this.images = this.shuffleArray(this.images);
  }

  shuffleArray(array: string[]): string[] {
    // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  onSelectCard(image: string, index: number): void {
    switch(this.activeImage) {
      case '':
        this.openImageIdList.push(index);
        this.activeImage = image;
        break;
      case image:
        this.activeImage = '';
        break;
      default:
        this.activeImage = '';
        this.closeImages();
    }
  }

  private closeImages(): void {

  }
}
