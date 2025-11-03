import { Component, OnInit } from '@angular/core';
import { Header } from '../shared/header/header';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imprint',
  imports: [Header, TranslateModule],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {
  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment === 'top' || fragment ==='privacy_policy') {
        setTimeout(() => {
          const el = document.getElementById(fragment);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      }
    });
  }
}
