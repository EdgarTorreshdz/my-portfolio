import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {
  private animationState = new BehaviorSubject<boolean>(false);
  public animationState$ = this.animationState.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  // Verificar si está en el navegador (no SSR)
  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  // Iniciar animaciones cuando la página esté lista
  initAnimations(): void {
    if (this.isBrowser()) {
      setTimeout(() => {
        this.animationState.next(true);
        this.setupScrollAnimations();
      }, 100);
    }
  }

  private setupScrollAnimations(): void {
    if (!this.isBrowser()) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observar todas las secciones con la clase 'scroll-animation'
    document.querySelectorAll('section.scroll-animation').forEach(section => {
      observer.observe(section);
    });
  }
}
