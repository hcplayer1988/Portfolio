import { Component, inject } from '@angular/core';
import { Header } from "../../shared/header/header";
import { CommonModule } from '@angular/common';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [Header, CommonModule,],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  isMenuOpen = false;

  onMenuToggle(open: boolean): void {
    this.isMenuOpen = open;
  }

}
