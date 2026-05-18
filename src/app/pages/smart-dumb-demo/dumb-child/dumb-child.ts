import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-dumb-child',
  imports: [],
  templateUrl: './dumb-child.html',
  styleUrl: './dumb-child.css',
})
export class DumbChildComponent {
  items = input.required<string[]>();
  itemClicked = output<string>();

  onItemClick(item: string) {
    this.itemClicked.emit(item);
  }
}
