import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationStart } from '@angular/router';
import { Footer } from "./shared/footer/footer";
import {TranslatePipe, TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        window.scrollTo({ top: 0 });
      }
    });
  }


  protected readonly title = signal('portfolio');

   private translate = inject(TranslateService);

  useLanguage(language: string): void {
      this.translate.use(language);
  }
}
