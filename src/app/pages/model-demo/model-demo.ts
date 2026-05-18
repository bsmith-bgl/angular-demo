import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChildComponent } from './child/child';

@Component({
  selector: 'app-model-demo',
  imports: [RouterLink, ChildComponent],
  templateUrl: './model-demo.html',
  styleUrl: './model-demo.css',
})
export class ModelDemoComponent {
  name = signal('World');
}
