import { Component, HostListener, inject } from '@angular/core';
import { Header } from "../../shared/header/header";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [Header, CommonModule, TranslateModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  isMenuOpen = false;
  isHeaderFixed = false;

  onMenuToggle(open: boolean): void {
    this.isMenuOpen = open;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Höhe der Hero-Section ermitteln
    const heroHeight = document.querySelector('.arrow_down')?.clientHeight || 0;
    this.isHeaderFixed = window.scrollY >= heroHeight;
  }


}
