import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  currentLang = 'en';

  constructor(private languageService: LanguageService) {}

  changeLanguage(lang: string): void {
    this.currentLang = lang;
    this.languageService.useLanguage(lang);
  }

  isMenuOpen = false;

  @Output() menuToggled = new EventEmitter<boolean>();

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuToggled.emit(this.isMenuOpen);
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.menuToggled.emit(false);
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    this.closeMenu();
  }
}
