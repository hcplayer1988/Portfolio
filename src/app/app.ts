// import { Component, AfterViewInit, signal, inject } from '@angular/core';
// import {
//   RouterOutlet,
//   Router,
//   NavigationStart,
//   NavigationEnd,
// } from '@angular/router';
// import { Footer } from './shared/footer/footer';
// import { TranslatePipe, TranslateService } from '@ngx-translate/core';
// import { ViewportScroller } from '@angular/common';
// import AOS from 'aos';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, Footer],
//   templateUrl: './app.html',
//   styleUrl: './app.scss',
// })
// export class App implements AfterViewInit {
//   protected readonly title = signal('portfolio');
//   private translate = inject(TranslateService);

//   constructor(
//     private router: Router,
//     private viewportScroller: ViewportScroller
//   ) {
//     this.router.events.subscribe((event) => {
//       if (event instanceof NavigationEnd) {
//         const fragment = this.router.parseUrl(this.router.url).fragment;
//         if (fragment) {
//           setTimeout(() => {
//             requestAnimationFrame(() => {
//               const el = document.getElementById(fragment);
//               const header = document.querySelector('header');
//               if (el && header) {
//                 const offset = header.getBoundingClientRect().height;
//                 const y =
//                   el.getBoundingClientRect().top + window.scrollY - offset;
//                 window.scrollTo({ top: y, behavior: 'smooth' });
//               }
//             });
//           }, 200);
//         }
//       }
//     });
//   }

//   ngAfterViewInit() {
//     setTimeout(() => AOS.init(), 500);
//   }

//   useLanguage(language: string): void {
//     this.translate.use(language);
//   }
// }

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
      if (event instanceof NavigationStart) {
        window.scrollTo({ top: 0 });
      }

      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          this.scrollAfterSticky(fragment);
        }
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => AOS.init(), 400);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  private scrollAfterSticky(fragment: string): void {
    const hero = document.querySelector('.all');
    const header = document.querySelector('header');
    const heroHeight = hero?.clientHeight || 0;
    const currentScroll = window.scrollY;

    const el = document.getElementById(fragment);
    if (!el || !header) return;

    const scrollToTarget = () => {
      requestAnimationFrame(() => {
        const offset = header.getBoundingClientRect().height;
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    };

    if (currentScroll < heroHeight) {
      const waitUntilSticky = () => {
        const isSticky = window.scrollY >= heroHeight;
        if (isSticky) {
          scrollToTarget();
        } else {
          window.scrollTo({ top: heroHeight + 0.01 });
          setTimeout(waitUntilSticky, 5);
        }
      };
      setTimeout(waitUntilSticky, 5);
    } else {
      setTimeout(scrollToTarget, 1);
    }
  }
}
