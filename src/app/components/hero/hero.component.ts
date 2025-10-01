import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../shared/i18n.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('subtitleEl', { static: true }) subtitleRef!: ElementRef<HTMLElement>;

  constructor(public i18n: I18nService) {}

  ngAfterViewInit(): void {
    // medir al montar
    this.updateTypingWidthAndRestart();

    // volver a medir/reiniciar cuando cambie el idioma
    this.i18n.langChange.subscribe(() => {
      setTimeout(() => this.updateTypingWidthAndRestart());
    });
  }

  // Opcional: si cambian tamaños por responsive, re-mide
  @HostListener('window:resize')
  onResize() {
    this.updateTypingWidthAndRestart(false);
  }

  private updateTypingWidthAndRestart(restart: boolean = true) {
    const h2 = this.subtitleRef?.nativeElement;
    if (!h2) return;

    const span = h2.querySelector('.typing-content') as HTMLElement | null;
    if (!span) return;

    const width = span.offsetWidth;
    h2.style.setProperty('--typing-width', `${width}px`);

    if (restart) {
      h2.classList.remove('typing-animate');
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      h2.offsetWidth;
      h2.classList.add('typing-animate');
    }
  }

  t(key: string) { return this.i18n.t(key); }
  changeLang(lang: 'es' | 'en') { this.i18n.setLang(lang); }

  // 👇 Nueva función: ruta del CV según idioma
  get cvPath(): string {
    const lang = this.i18n.getLang();
    return lang === 'en'
      ? '/docs/CV_en_Edgar_Torres.pdf'
      : '/docs/CV_es_Edgar_Torres.pdf';
  }
}
