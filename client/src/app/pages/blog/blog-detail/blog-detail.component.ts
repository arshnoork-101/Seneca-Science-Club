import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  template: `
    <div class="blog-detail-container">
      <h1>Blog Post Details</h1>
      <p>Detailed view of a blog post.</p>
    </div>
  `,
  styles: [`
    .blog-detail-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
  `]
})
export class BlogDetailComponent {}
