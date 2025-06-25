import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
  name: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  title: ['', Validators.required], // New field
  message: ['', [Validators.required, Validators.minLength(10)]]
});

  }

  onSubmit() {
    if (this.contactForm.valid) {
      const serviceID = 'service_nyep1hi';
      const templateID = 'template_yv78ffk';
      const publicKey = 'QtQw4wXPndS01PgDe'; // found in EmailJS dashboard

      emailjs.send(serviceID, templateID, this.contactForm.value, publicKey)
        .then(response => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          this.contactForm.reset();
        }, error => {
          console.error('FAILED...', error);
          alert('Something went wrong. Please try again.');
        });
    }
  }
}
