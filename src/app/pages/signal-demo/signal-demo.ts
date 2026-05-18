import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signal-demo',
  imports: [RouterLink],
  templateUrl: './signal-demo.html',
  styleUrl: './signal-demo.css',
})
export class SignalDemoComponent {
  count = signal(0);

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => value - 1);
  }

  reset() {
    this.count.set(0);
  }
}
