import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="about-container">
      <h1>About Seneca Science Club</h1>
      <p>Welcome to the Seneca Science Club - a community of science enthusiasts.</p>
    </div>
  `,
  styles: [`
    .about-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
  `]
})
export class AboutComponent {}
