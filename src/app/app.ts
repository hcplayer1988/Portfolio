import { Component, AfterViewInit, signal, inject } from '@angular/core';
import {
  RouterOutlet,
  Router,
  NavigationStart,
  NavigationEnd,
} from '@angular/router';
import { Footer } from './shared/footer/footer';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  protected readonly title = signal('portfolio');
  private translate = inject(TranslateService);

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          setTimeout(() => {
            requestAnimationFrame(() => {
              const el = document.getElementById(fragment);
              const header = document.querySelector('header');
              if (el && header) {
                const offset = header.getBoundingClientRect().height;
                const y =
                  el.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            });
          }, 200);
        }
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => AOS.init(), 500);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}

