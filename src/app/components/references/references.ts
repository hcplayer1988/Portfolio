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
    { key: 'sahraMueller', name: 'Sahra Müller', link: '' },
    { key: 'jonasBecker', name: 'Jonas Becker', link: '' },
    { key: 'leaSchmidt', name: 'Lea Schmidt', link: '' },
    { key: 'tomRichter', name: 'Tom Richter', link: '' },
    { key: 'annaWeber', name: 'Anna Weber', link: '#' },
  ];
}
