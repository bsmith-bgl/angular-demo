import { Component, signal, effect } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-effect-demo',
  imports: [RouterLink],
  templateUrl: './effect-demo.html',
  styleUrl: './effect-demo.css',
})
export class EffectDemoComponent {
  count = signal(0);
  log = signal('');

  constructor() {
    effect(() => {
      console.log('Count changed to:', this.count());
      this.log.set(`Effect ran: count is ${this.count()}`);
    });
  }

  increment() {
    this.count.update(value => value + 1);
  }
}
