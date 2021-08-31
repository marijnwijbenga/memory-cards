import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() turns: number = 0;
  @Input() score: number = 0;
  @Output() newGame: EventEmitter<void> = new EventEmitter();

  onNewGame(): void {
    this.newGame.emit();
  }
}
