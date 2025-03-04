import { TitleColor } from './../../../ggc-side-menu/src/lib/ggc-side-menu.component';
import { Component, signal } from '@angular/core';

import { GgcSideMenuComponent } from 'ggc-side-menu';

@Component({
  selector: 'app-root',
  imports: [GgcSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ggc-testbed-app';

  TitleColor = TitleColor;
  isAuthenticated = signal(false);
}
