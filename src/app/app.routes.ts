import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: 'es', pathMatch: 'full' },
  {
    path: ':lang',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AppComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];
