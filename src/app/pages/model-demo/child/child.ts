import { Component, model } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class ChildComponent {
  name = model.required<string>();

  updateName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name.set(input.value);
  }
}
