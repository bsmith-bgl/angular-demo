import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { SignalDemoComponent } from './pages/signal-demo/signal-demo';
import { ComputedDemoComponent } from './pages/computed-demo/computed-demo';
import { EffectDemoComponent } from './pages/effect-demo/effect-demo';
import { SmartDumbDemoComponent } from './pages/smart-dumb-demo/smart-dumb-demo';
import { ModelDemoComponent } from './pages/model-demo/model-demo';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signal', component: SignalDemoComponent },
  { path: 'computed', component: ComputedDemoComponent },
  { path: 'effect', component: EffectDemoComponent },
  { path: 'smart-dumb', component: SmartDumbDemoComponent },
  { path: 'model', component: ModelDemoComponent }
];
