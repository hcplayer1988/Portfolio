import { Component } from '@angular/core';
import { Header } from "../../shared/header/header";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [Header, CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  isMenuOpen = false;

  onMenuToggle(open: boolean): void {
    this.isMenuOpen = open;
  }

}
