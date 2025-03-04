import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-ggc-side-menu',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './ggc-side-menu.component.html',
  styles: ``
})
export class GgcSideMenuComponent {
  isAuthenticated = input(false);

  titleColor = input<TitleColor>(TitleColor.purple);

  signOut = output();
  signIn = output();
}
