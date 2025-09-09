import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../shared/i18n.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(
    private fb: FormBuilder,
    public i18n: I18nService // 👈 lo hacemos público para usar en el template
  ) {
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

  t(key: string, params?: any): string {
    return this.i18n.t(key, params);
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitError = false;

      setTimeout(() => {
        this.isSubmitting = false;
        const success = Math.random() > 0.3;

        if (success) {
          this.submitSuccess = true;
          this.contactForm.reset();
          setTimeout(() => (this.submitSuccess = false), 5000);
        } else {
          this.submitError = true;
        }
      }, 1500);
    }
  }
}
