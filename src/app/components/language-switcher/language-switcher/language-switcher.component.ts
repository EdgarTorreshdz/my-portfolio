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
      <button (click)="toggleLang()">
        {{ i18n.getLang().toUpperCase() }}
      </button>
    </div>
  `,
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {
  constructor(public i18n: I18nService, private router: Router) {}

  toggleLang() {
    const newLang = this.i18n.getLang() === 'es' ? 'en' : 'es';
    this.i18n.setLang(newLang);
    this.router.navigate([`/${newLang}/home`]);
  }
}
