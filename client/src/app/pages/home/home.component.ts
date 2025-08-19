import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-home',
  template: `
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Welcome to <span class="highlight">Seneca Science Club</span>
          </h1>
          <p class="hero-subtitle">
            Igniting curiosity, fostering innovation, and building a community of science enthusiasts
          </p>
          <div class="hero-actions">
            <button mat-raised-button color="accent" size="large" routerLink="/join" class="cta-button">
              <mat-icon>person_add</mat-icon>
              Join Now
            </button>
            <button mat-stroked-button color="primary" size="large" routerLink="/events" class="cta-button">
              <mat-icon>event</mat-icon>
              Explore Events
            </button>
            <button mat-stroked-button color="primary" size="large" routerLink="/blog" class="cta-button">
              <mat-icon>article</mat-icon>
              Read Blog
            </button>
          </div>
        </div>
        <div class="hero-image">
          <div class="science-icons">
            <mat-icon class="floating-icon icon-1">science</mat-icon>
            <mat-icon class="floating-icon icon-2">biotech</mat-icon>
            <mat-icon class="floating-icon icon-3">chemistry</mat-icon>
            <mat-icon class="floating-icon icon-4">psychology</mat-icon>
            <mat-icon class="floating-icon icon-5">biotech</mat-icon>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Highlights Section -->
    <section class="highlights-section">
      <div class="container">
        <h2 class="section-title">What's Happening</h2>
        <div class="highlights-grid">
          <!-- Next Event -->
          <div class="highlight-card event-highlight" *ngIf="nextEvent">
            <div class="highlight-icon">
              <mat-icon>event</mat-icon>
            </div>
            <div class="highlight-content">
              <h3>Next Event</h3>
              <p class="event-title">{{ nextEvent.title }}</p>
              <p class="event-date">{{ nextEvent.date | date:'MMM dd, yyyy' }}</p>
              <button mat-raised-button color="primary" size="small" [routerLink]="['/events', nextEvent.id]">
                Learn More
              </button>
            </div>
          </div>

          <!-- Latest Blog Post -->
          <div class="highlight-card blog-highlight" *ngIf="latestBlog">
            <div class="highlight-icon">
              <mat-icon>article</mat-icon>
            </div>
            <div class="highlight-content">
              <h3>Latest Blog</h3>
              <p class="blog-title">{{ latestBlog.title }}</p>
              <p class="blog-excerpt">{{ latestBlog.excerpt | slice:0:80 }}...</p>
              <button mat-raised-button color="primary" size="small" [routerLink]="['/blog', latestBlog.id]">
                Read More
              </button>
            </div>
          </div>

          <!-- Member Spotlight -->
          <div class="highlight-card member-highlight">
            <div class="highlight-icon">
              <mat-icon>star</mat-icon>
            </div>
            <div class="highlight-content">
              <h3>Member Spotlight</h3>
              <p>Join our growing community of science enthusiasts</p>
              <p class="member-count">100+ Active Members</p>
              <button mat-raised-button color="accent" size="small" routerLink="/join">
                Become a Member
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">Why Join Seneca Science Club?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <mat-icon>school</mat-icon>
            </div>
            <h3>Learn & Grow</h3>
            <p>Access to workshops, lectures, and hands-on experiments in various scientific disciplines</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <mat-icon>people</mat-icon>
            </div>
            <h3>Build Connections</h3>
            <p>Network with fellow students, faculty, and industry professionals in the science field</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <mat-icon>emoji_events</mat-icon>
            </div>
            <h3>Leadership Opportunities</h3>
            <p>Take on leadership roles and contribute to organizing events and activities</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <mat-icon>work</mat-icon>
            </div>
            <h3>Real-World Experience</h3>
            <p>Gain practical experience through field trips, competitions, and research projects</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Feed Preview -->
    <section class="social-section">
      <div class="container">
        <h2 class="section-title">Stay Connected</h2>
        <div class="social-grid">
          <div class="social-card instagram">
            <div class="social-header">
              <mat-icon>camera_alt</mat-icon>
              <h3>Instagram</h3>
            </div>
            <p>Follow us for behind-the-scenes photos, event updates, and member spotlights</p>
            <a href="https://instagram.com/senecascienceclub" target="_blank" class="social-link">
              <button mat-stroked-button color="primary">
                <mat-icon>launch</mat-icon>
                Follow on Instagram
              </button>
            </a>
          </div>
          <div class="social-card linkedin">
            <div class="social-header">
              <mat-icon>business</mat-icon>
              <h3>LinkedIn</h3>
            </div>
            <p>Connect with our professional network and stay updated on career opportunities</p>
            <a href="https://linkedin.com/company/senecascienceclub" target="_blank" class="social-link">
              <button mat-stroked-button color="primary">
                <mat-icon>launch</mat-icon>
                Connect on LinkedIn
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Start Your Science Journey?</h2>
          <p>Join the Seneca Science Club today and become part of a community that celebrates curiosity, innovation, and discovery.</p>
          <div class="cta-actions">
            <button mat-raised-button color="accent" size="large" routerLink="/join" class="cta-button">
              <mat-icon>person_add</mat-icon>
              Join Now
            </button>
            <button mat-stroked-button color="primary" size="large" routerLink="/about" class="cta-button">
              <mat-icon>info</mat-icon>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 80px 0;
      min-height: 80vh;
      display: flex;
      align-items: center;
    }

    .hero-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 20px;
      line-height: 1.2;
    }

    .highlight {
      color: #ffd700;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .hero-subtitle {
      font-size: 1.3rem;
      margin-bottom: 40px;
      opacity: 0.9;
      line-height: 1.6;
    }

    .hero-actions {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    .cta-button {
      padding: 12px 24px;
      font-size: 1.1rem;
      font-weight: 500;
    }

    .hero-image {
      position: relative;
      height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .science-icons {
      position: relative;
      width: 300px;
      height: 300px;
    }

    .floating-icon {
      position: absolute;
      font-size: 4rem;
      color: rgba(255, 255, 255, 0.8);
      animation: float 6s ease-in-out infinite;
    }

    .icon-1 { top: 0; left: 50%; transform: translateX(-50%); animation-delay: 0s; }
    .icon-2 { top: 20%; right: 0; animation-delay: 1s; }
    .icon-3 { bottom: 20%; left: 0; animation-delay: 2s; }
    .icon-4 { bottom: 0; left: 25%; animation-delay: 3s; }
    .icon-5 { top: 40%; left: 10%; animation-delay: 4s; }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    .highlights-section {
      padding: 80px 0;
      background-color: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 60px;
      color: #333;
    }

    .highlights-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .highlight-card {
      background: white;
      border-radius: 16px;
      padding: 30px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .highlight-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0,0,0,0.15);
    }

    .highlight-icon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea, #764ba2);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }

    .highlight-icon mat-icon {
      color: white;
      font-size: 2rem;
    }

    .highlight-content h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 15px;
      color: #333;
    }

    .event-title, .blog-title {
      font-weight: 600;
      color: #667eea;
      margin-bottom: 8px;
    }

    .event-date, .blog-excerpt {
      color: #666;
      margin-bottom: 20px;
    }

    .member-count {
      font-size: 1.2rem;
      font-weight: 600;
      color: #ffd700;
      margin-bottom: 20px;
    }

    .features-section {
      padding: 80px 0;
      background: white;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
    }

    .feature-card {
      text-align: center;
      padding: 30px 20px;
    }

    .feature-icon {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: linear-gradient(135deg, #ffd700, #ffb300);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
    }

    .feature-icon mat-icon {
      color: white;
      font-size: 2.5rem;
    }

    .feature-card h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 15px;
      color: #333;
    }

    .feature-card p {
      color: #666;
      line-height: 1.6;
    }

    .social-section {
      padding: 80px 0;
      background-color: #f8f9fa;
    }

    .social-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .social-card {
      background: white;
      border-radius: 16px;
      padding: 30px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      text-align: center;
    }

    .social-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-bottom: 20px;
    }

    .social-header mat-icon {
      font-size: 2rem;
      color: #667eea;
    }

    .social-header h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #333;
    }

    .social-card p {
      color: #666;
      margin-bottom: 25px;
      line-height: 1.6;
    }

    .social-link {
      text-decoration: none;
    }

    .cta-section {
      padding: 80px 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .cta-content {
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
    }

    .cta-content h2 {
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .cta-content p {
      font-size: 1.2rem;
      margin-bottom: 40px;
      opacity: 0.9;
      line-height: 1.6;
    }

    .cta-actions {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 40px;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-actions {
        justify-content: center;
      }

      .highlights-grid {
        grid-template-columns: 1fr;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }

      .social-grid {
        grid-template-columns: 1fr;
      }

      .cta-actions {
        flex-direction: column;
        align-items: center;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  nextEvent: any = null;
  latestBlog: any = null;

  constructor(
    private eventService: EventService,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    this.loadHighlights();
  }

  loadHighlights() {
    // Load next event
    this.eventService.getEvents({ status: 'UPCOMING', limit: 1 }).subscribe(
      response => {
        if (response.events && response.events.length > 0) {
          this.nextEvent = response.events[0];
        }
      }
    );

    // Load latest blog post
    this.blogService.getBlogPosts({ limit: 1 }).subscribe(
      response => {
        if (response.posts && response.posts.length > 0) {
          this.latestBlog = response.posts[0];
        }
      }
    );
  }
}
