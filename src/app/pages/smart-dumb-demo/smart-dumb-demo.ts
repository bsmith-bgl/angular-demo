import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DumbChildComponent } from './dumb-child/dumb-child';

@Component({
  selector: 'app-smart-dumb-demo',
  imports: [RouterLink, DumbChildComponent],
  templateUrl: './smart-dumb-demo.html',
  styleUrl: './smart-dumb-demo.css',
})
export class SmartDumbDemoComponent {
  items = signal<string[]>(['Apple', 'Banana', 'Orange']);
  selectedItem = signal('');

  fetchData() {
    setTimeout(() => {
      this.items.set(['Apple', 'Banana', 'Orange', 'Grape', 'Mango']);
    }, 1000);
  }

  handleItemClick(item: string) {
    this.selectedItem.set(item);
  }
}
