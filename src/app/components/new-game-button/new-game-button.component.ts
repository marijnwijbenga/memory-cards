import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-game-button',
  templateUrl: 'new-game-button.component.html',
  styleUrls: ['new-game-button.component.scss'],
})
export class NewGameButtonComponent {
  @Output() newGame: EventEmitter<void> = new EventEmitter();

  onNewGame(): void {
    this.newGame.emit();
  }
}
