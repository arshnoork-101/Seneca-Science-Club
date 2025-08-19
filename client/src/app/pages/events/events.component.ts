import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
    <div class="events-container">
      <h1>Events</h1>
      <p>Upcoming science events and workshops.</p>
    </div>
  `,
  styles: [`
    .events-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
  `]
})
export class EventsComponent {}
