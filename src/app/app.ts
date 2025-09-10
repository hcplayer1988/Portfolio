import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./shared/footer/footer";
import {TranslatePipe, TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');

   private translate = inject(TranslateService);

  useLanguage(language: string): void {
      this.translate.use(language);
  }
}
