import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() image: string = '';
  @Input() open: boolean = false;

  @Output() selected: EventEmitter<void> = new EventEmitter();

  onOpen(): void {
   this.selected.emit();
  }
}
