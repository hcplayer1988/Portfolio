import { Component, HostListener, inject } from '@angular/core';
import { Header } from '../../shared/header/header';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterModule, Header, CommonModule, TranslateModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  static forceSticky = false;
  isMenuOpen = false;
  isHeaderFixed = false;

  onMenuToggle(open: boolean): void {
    this.isMenuOpen = open;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const heroHeight = document.querySelector('.all')?.clientHeight || 0;
    const scrollY = window.scrollY;

    // Sticky aktivieren, wenn gescrollt wurde oder extern erzwungen
    this.isHeaderFixed = scrollY >= heroHeight || Hero.forceSticky;

    // Sticky-Flag zurücksetzen, wenn man wieder ganz oben ist
    if (scrollY < heroHeight) {
      Hero.forceSticky = false;
    }
  }
}
