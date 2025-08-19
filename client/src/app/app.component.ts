import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    .main-content {
      min-height: calc(100vh - 128px); /* Account for header and footer */
      padding-top: 64px; /* Account for fixed header */
    }
  `]
})
export class AppComponent {
  title = 'Seneca Science Club';
}
