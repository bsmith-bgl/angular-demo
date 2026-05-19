import { Component, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-dumb-child',
  imports: [],
  templateUrl: './dumb-child.html',
  styleUrl: './dumb-child.css',
})
export class DumbChildComponent {
  // This is old input decorator we want to move away from
  // @Input() items! : string[];
  items = input.required<string[]>();

  // Old output decorator we want to move away from
  // @Output() itemChange = new EventEmitter();
  itemClicked = output<string>();

  onItemClick(item: string) {
    this.itemClicked.emit(item);
  }
}
