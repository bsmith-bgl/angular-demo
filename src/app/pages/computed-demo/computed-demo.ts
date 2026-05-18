import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-computed-demo',
  imports: [RouterLink],
  templateUrl: './computed-demo.html',
  styleUrl: './computed-demo.css',
})
export class ComputedDemoComponent {
  firstName = signal('John');
  lastName = signal('Doe');
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  updateFirstName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.firstName.set(input.value);
  }

  updateLastName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.lastName.set(input.value);
  }
}
