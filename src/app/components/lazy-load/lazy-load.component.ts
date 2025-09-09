import { Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lazy-load',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #container class="lazy-load-container" [id]="'lazy-' + sectionId">
      <div *ngIf="!isLoaded" class="loading-placeholder">
        <div class="loading-spinner"></div>
      </div>
    </div>
  `,
  styles: [`
    .lazy-load-container {
      min-height: 100px;
    }
    .loading-placeholder {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 300px;
    }
    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 4px solid #f3f3f3;
      border-top: 4px solid #2D4D90;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    .dark .loading-spinner {
      border: 4px solid #374151;
      border-top: 4px solid #3B82F6;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `]
})
export class LazyLoadComponent implements OnInit, OnDestroy {
  @Input() component: any;
  @Input() sectionId!: string;

  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  isLoaded = false;
  private observer: IntersectionObserver | null = null;

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit() {
    // Cargar inmediatamente si es la sección hero
    if (this.sectionId === 'hero') {
      this.loadComponent();
    } else {
      this.setupIntersectionObserver();
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.isLoaded) {
          this.loadComponent();
          this.observer?.disconnect();
        }
      });
    }, { threshold: 0.1, rootMargin: '500px' }); // Cargar 500px antes

    setTimeout(() => {
      const element = this.container.element.nativeElement;
      this.observer?.observe(element);
    }, 100);
  }

  public loadComponent(): void {
    if (this.isLoaded) return;

    try {
      const componentFactory = this.cfr.resolveComponentFactory(this.component);
      this.container.clear();
      this.container.createComponent(componentFactory);
      this.isLoaded = true;

      // Notificar globalmente
      this.notifyGlobalComponentLoaded();
    } catch (error) {
      console.error('Error loading component:', error);
    }
  }

  private notifyGlobalComponentLoaded() {
    const appComponent = (window as any).appComponent;
    if (appComponent && typeof appComponent.onComponentLoaded === 'function') {
      appComponent.onComponentLoaded(this.sectionId);
    }
  }
}
