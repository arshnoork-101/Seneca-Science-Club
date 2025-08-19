import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="contact-container">
      <h1>Contact Us</h1>
      <p>Get in touch with the Seneca Science Club.</p>
    </div>
  `,
  styles: [`
    .contact-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
  `]
})
export class ContactComponent {}
