import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  contactData = {
    title: 'Contacto',
    subtitle: 'Ponte en contacto conmigo',
    details: [
      {
        icon: '📧',
        title: 'Email',
        value: 'tu.email@ejemplo.com'
      },
      {
        icon: '📱',
        title: 'Teléfono',
        value: '+1 (234) 567-8901'
      },
      {
        icon: '📍',
        title: 'Ubicación',
        value: 'Ciudad, País'
      }
    ],
    socials: [
      {
        name: 'GitHub',
        icon: '🐙',
        link: 'https://github.com/tuusuario'
      },
      {
        name: 'LinkedIn',
        icon: '💼',
        link: 'https://linkedin.com/in/tuusuario'
      },
      {
        name: 'Twitter',
        icon: '🐦',
        link: 'https://twitter.com/tuusuario'
      },
      {
        name: 'Instagram',
        icon: '📸',
        link: 'https://instagram.com/tuusuario'
      }
    ]
  };

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    console.log('Contact iniciando');
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitError = false;

      // Simular envío del formulario
      setTimeout(() => {
        this.isSubmitting = false;

        // Simular éxito o error aleatoriamente (en una app real, esto sería una llamada HTTP)
        const success = Math.random() > 0.3;

        if (success) {
          this.submitSuccess = true;
          this.contactForm.reset();

          // Ocultar mensaje de éxito después de 5 segundos
          setTimeout(() => {
            this.submitSuccess = false;
          }, 5000);
        } else {
          this.submitError = true;
        }
      }, 1500);
    }
  }
}
