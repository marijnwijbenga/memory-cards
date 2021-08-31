import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: 'score.component.html',
  styleUrls: ['score.component.scss'],
})
export class ScoreComponent {
  @Input() score: number = 0;
  @Input() turns: number = 0;
  @Input() gameFinished: boolean = false;

  @Output() newGame: EventEmitter<void> = new EventEmitter();

  onNewGame(): void {
    this.newGame.emit();
  }
}
