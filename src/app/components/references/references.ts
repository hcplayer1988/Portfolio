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
    { key: 'calvinHanisch', name: 'Calvin Hanisch',},
    { key: 'madinaAskar', name: 'Madina Askar', link: 'https://www.linkedin.com/in/madina-aska/' },
    { key: 'christopKonst', name: 'Christop Konst', link: 'https://www.linkedin.com/in/christoph-konst/' },
    { key: 'phillipSchulze', name: 'Phillip Schulze',}
  ];
}
