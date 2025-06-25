import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [MessageService]
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder,  private messageService: MessageService) {
    this.contactForm = this.fb.group({
  name: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  title: ['', Validators.required], // New field
  message: ['', [Validators.required, Validators.minLength(10)]]
});

  }
success = false;
error = false;
  onSubmit() {
    if (this.contactForm.valid) {
      const serviceID = 'service_nyep1hi';
      const templateID = 'template_yv78ffk';
      const publicKey = 'QtQw4wXPndS01PgDe'; // found in EmailJS dashboard

       emailjs.send(serviceID, templateID, this.contactForm.value, publicKey)
        .then(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Message Sent',
            detail: 'Thank you! I will contact you soon.',
            life: 3000
          });
          this.contactForm.reset();
        })
        .catch(() => {
          this.messageService.add({
            severity: 'error',
            summary: 'Send Failed',
            detail: 'Please try again later.',
            life: 3000
          });
        });
  
    }
  }
}
