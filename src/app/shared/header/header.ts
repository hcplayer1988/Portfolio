import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  currentLang = 'en';

  constructor(
    private languageService: LanguageService,
    private scrollService: ScrollService,
    private router: Router
  ) {}

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

  navigateTo(sectionId: string): void {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scrollService.scrollToSection(sectionId);
      }, 100);
    });
  }
}
