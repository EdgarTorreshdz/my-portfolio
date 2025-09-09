import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { I18nService } from '../../../shared/i18n.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="lang-switcher">
      <button
        *ngFor="let lang of langs"
        (click)="changeLang(lang)"
        [class.active]="i18n.getLang() === lang"
      >
        {{ lang.toUpperCase() }}
      </button>
    </div>
  `,
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {
  langs: ('es' | 'en')[] = ['es', 'en'];

  constructor(public i18n: I18nService, private router: Router) {}

  changeLang(lang: 'es' | 'en') {
    this.i18n.setLang(lang);
    this.router.navigate([`/${lang}/home`]);
  }
}
