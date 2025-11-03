import { Component, signal, inject } from '@angular/core';
import {
  RouterOutlet,
  Router,
  ActivatedRoute,
  NavigationEnd,
} from '@angular/router';
import { Footer } from './shared/footer/footer';
import { TranslateService } from '@ngx-translate/core';
import AOS from 'aos';
import { ScrollService } from './services/scroll.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private scrollService: ScrollService
  ) {}

  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.route.snapshot.fragment;
        const currentUrl = this.router.url.split('#')[0];
        const isLandingPage = currentUrl === '/' || currentUrl === '/home';

        if (fragment && isLandingPage) {
          setTimeout(() => {
            this.scrollService.scrollToSection(fragment);
          }, 200);
        }
      });
  }

  ngOnInit() {
    AOS.init();
  }
  protected readonly title = signal('portfolio');

  private translate = inject(TranslateService);

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
