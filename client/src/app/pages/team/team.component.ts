import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  template: `
    <div class="team-container">
      <h1>Our Team</h1>
      <p>Meet the Seneca Science Club leadership team.</p>
    </div>
  `,
  styles: [`
    .team-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
  `]
})
export class TeamComponent {}
