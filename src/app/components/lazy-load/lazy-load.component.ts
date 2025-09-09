import { Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lazy-load',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #container class="lazy-load-container">
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
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `]
})
export class LazyLoadComponent implements OnInit, OnDestroy {
  @Input() component: any;
  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  isLoaded = false;
  private observer: IntersectionObserver | null = null;

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit() {
    this.setupIntersectionObserver();
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
    }, { threshold: 0.1 });

    // Esperar a que la vista se renderice para observar el elemento
    setTimeout(() => {
      const element = this.container.element.nativeElement;
      this.observer?.observe(element);
    }, 0);
  }

  private async loadComponent() {
    try {
      const componentFactory = this.cfr.resolveComponentFactory(this.component);
      this.container.clear();
      this.container.createComponent(componentFactory);
      this.isLoaded = true;
    } catch (error) {
      console.error('Error loading component:', error);
    }
  }
}
