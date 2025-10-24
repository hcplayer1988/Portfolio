import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  imports: [CommonModule, TranslateModule],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  references = [
    { key: 'calvinHanisch', name: 'Calvin Hanisch', link: '' },
    { key: 'madinaAskar', name: 'Madina Askar', link: '' },
    { key: 'christopKonst', name: 'Christop Konst', link: '' },
    { key: 'phillipSchulze', name: 'Phillip Schulze', link: '' }
  ];
}
