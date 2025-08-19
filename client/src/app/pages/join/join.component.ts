import { Component } from '@angular/core';

@Component({
  selector: 'app-join',
  template: `
    <div class="join-container">
      <h1>Join Seneca Science Club</h1>
      <p>Become part of our science community!</p>
    </div>
  `,
  styles: [`
    .join-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
  `]
})
export class JoinComponent {}
