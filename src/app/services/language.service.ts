import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  constructor(private translate: TranslateService) {}

  useLanguage(lang: string): void {
    this.translate.use(lang);
  }

  getCurrentLang(): string {
    return this.translate.currentLang;
  }
}
