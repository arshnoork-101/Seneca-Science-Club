import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  template: `
    <div class="gallery-container">
      <h1>Gallery</h1>
      <p>Photos and videos from our events and activities.</p>
    </div>
  `,
  styles: [`
    .gallery-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
  `]
})
export class GalleryComponent {}
