import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../components/hero/hero';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  constructor(private router: Router) {}

  scrollToSection(
    sectionId: string,
    defaultOffset: number = 80,
    delay: number = 100
  ): void {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const header = document.querySelector('header');
    const headerHeight =
      header?.getBoundingClientRect().height || defaultOffset;

    const isWhyMe = sectionId === 'why_me';
    const isAtTop = window.scrollY === 0;

    const adjustedOffset =
      isWhyMe && isAtTop ? headerHeight : isWhyMe ? 0 : headerHeight;

    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    const heroHeight = document.querySelector('.all')?.clientHeight || 0;

    if (window.scrollY === 0 && elementTop >= heroHeight && !isWhyMe) {
      Hero.forceSticky = true;
      window.scrollTo({ top: 1, behavior: 'auto' });
    }

    setTimeout(() => {
      const finalY =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        adjustedOffset;
      window.scrollTo({ top: finalY, behavior: 'smooth' });

      Hero.forceSticky = false;

      // console.log(
      //   `Scroll to ${sectionId}, offset: ${adjustedOffset}, sticky forced: ${Hero.forceSticky}`
      // );
    }, delay);
  }

  scrollToTop(delay: number = 10): void {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, delay);
  }
}
