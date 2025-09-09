import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../shared/i18n.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  constructor(public i18n: I18nService) {}

  t(key: string) {
    return this.i18n.t(key);
  }

  changeLang(lang: 'es' | 'en') {
    this.i18n.setLang(lang);
  }
}
