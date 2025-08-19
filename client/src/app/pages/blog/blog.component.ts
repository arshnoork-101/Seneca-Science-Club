import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: `
    <div class="blog-container">
      <h1>Blog</h1>
      <p>Latest news and articles from the Seneca Science Club.</p>
    </div>
  `,
  styles: [`
    .blog-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
  `]
})
export class BlogComponent {}
