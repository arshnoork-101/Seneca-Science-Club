import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary" class="header-toolbar">
      <div class="header-content">
        <div class="logo-section">
          <button mat-button routerLink="/" class="logo-button">
            <mat-icon class="logo-icon">science</mat-icon>
            <span class="logo-text">Seneca Science Club</span>
          </button>
        </div>

        <nav class="nav-menu" [class.hidden]="isMobile">
          <button mat-button routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            Home
          </button>
          <button mat-button routerLink="/about" routerLinkActive="active">
            About
          </button>
          <button mat-button routerLink="/events" routerLinkActive="active">
            Events
          </button>
          <button mat-button routerLink="/team" routerLinkActive="active">
            Team
          </button>
          <button mat-button routerLink="/gallery" routerLinkActive="active">
            Gallery
          </button>
          <button mat-button routerLink="/blog" routerLinkActive="active">
            Blog
          </button>
          <button mat-button routerLink="/contact" routerLinkActive="active">
            Contact
          </button>
        </nav>

        <div class="user-section">
          <ng-container *ngIf="!isLoggedIn; else loggedInUser">
            <button mat-button routerLink="/login" class="login-btn">
              <mat-icon>login</mat-icon>
              Login
            </button>
            <button mat-raised-button color="accent" routerLink="/join" class="join-btn">
              <mat-icon>person_add</mat-icon>
              Join Now
            </button>
          </ng-container>

          <ng-template #loggedInUser>
            <button mat-icon-button [matMenuTriggerFor]="userMenu" class="user-menu-btn">
              <mat-icon>account_circle</mat-icon>
            </button>
            <mat-menu #userMenu="matMenu">
              <button mat-menu-item routerLink="/profile">
                <mat-icon>person</mat-icon>
                <span>Profile</span>
              </button>
              <button mat-menu-item *ngIf="isAdmin" routerLink="/admin">
                <mat-icon>admin_panel_settings</mat-icon>
                <span>Admin</span>
              </button>
              <mat-divider></mat-divider>
              <button mat-menu-item (click)="logout()">
                <mat-icon>logout</mat-icon>
                <span>Logout</span>
              </button>
            </mat-menu>
          </ng-template>

          <button mat-icon-button (click)="toggleMobileMenu()" class="mobile-menu-btn" [class.hidden]="!isMobile">
            <mat-icon>menu</mat-icon>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <mat-sidenav-container class="mobile-nav-container" *ngIf="isMobile">
        <mat-sidenav #mobileNav mode="over" position="end" [opened]="mobileMenuOpen" class="mobile-nav">
          <mat-nav-list>
            <a mat-list-item routerLink="/" (click)="closeMobileMenu()" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
              <mat-icon>home</mat-icon>
              <span>Home</span>
            </a>
            <a mat-list-item routerLink="/about" (click)="closeMobileMenu()" routerLinkActive="active">
              <mat-icon>info</mat-icon>
              <span>About</span>
            </a>
            <a mat-list-item routerLink="/events" (click)="closeMobileMenu()" routerLinkActive="active">
              <mat-icon>event</mat-icon>
              <span>Events</span>
            </a>
            <a mat-list-item routerLink="/team" (click)="closeMobileMenu()" routerLinkActive="active">
              <mat-icon>group</mat-icon>
              <span>Team</span>
            </a>
            <a mat-list-item routerLink="/gallery" (click)="closeMobileMenu()" routerLinkActive="active">
              <mat-icon>photo_library</mat-icon>
              <span>Gallery</span>
            </a>
            <a mat-list-item routerLink="/blog" (click)="closeMobileMenu()" routerLinkActive="active">
              <mat-icon>article</mat-icon>
              <span>Blog</span>
            </a>
            <a mat-list-item routerLink="/contact" (click)="closeMobileMenu()" routerLinkActive="active">
              <mat-icon>contact_support</mat-icon>
              <span>Contact</span>
            </a>
            <mat-divider></mat-divider>
            <ng-container *ngIf="!isLoggedIn">
              <a mat-list-item routerLink="/login" (click)="closeMobileMenu()">
                <mat-icon>login</mat-icon>
                <span>Login</span>
              </a>
              <a mat-list-item routerLink="/join" (click)="closeMobileMenu()">
                <mat-icon>person_add</mat-icon>
                <span>Join Now</span>
              </a>
            </ng-container>
            <ng-container *ngIf="isLoggedIn">
              <a mat-list-item routerLink="/profile" (click)="closeMobileMenu()">
                <mat-icon>person</mat-icon>
                <span>Profile</span>
              </a>
              <a mat-list-item *ngIf="isAdmin" routerLink="/admin" (click)="closeMobileMenu()">
                <mat-icon>admin_panel_settings</mat-icon>
                <span>Admin</span>
              </a>
              <a mat-list-item (click)="logout(); closeMobileMenu()">
                <mat-icon>logout</mat-icon>
                <span>Logout</span>
              </a>
            </ng-container>
          </mat-nav-list>
        </mat-sidenav>
      </mat-sidenav-container>
    </mat-toolbar>
  `,
  styles: [`
    .header-toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;
    }

    .logo-section {
      display: flex;
      align-items: center;
    }

    .logo-button {
      display: flex;
      align-items: center;
      color: white;
      text-decoration: none;
      font-size: 18px;
      font-weight: 500;
    }

    .logo-icon {
      margin-right: 8px;
      font-size: 28px;
      width: 28px;
      height: 28px;
    }

    .logo-text {
      font-size: 20px;
      font-weight: 600;
    }

    .nav-menu {
      display: flex;
      gap: 8px;
    }

    .nav-menu button {
      color: white;
      font-weight: 500;
    }

    .nav-menu button.active {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .user-section {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .login-btn {
      color: white;
    }

    .join-btn {
      background-color: #ff4081;
      color: white;
    }

    .user-menu-btn {
      color: white;
    }

    .mobile-menu-btn {
      color: white;
      display: none;
    }

    .mobile-nav-container {
      position: absolute;
      top: 64px;
      right: 0;
      width: 280px;
    }

    .mobile-nav {
      width: 280px;
    }

    .mobile-nav .mat-nav-list {
      padding-top: 0;
    }

    .mobile-nav .mat-list-item {
      height: 56px;
    }

    .mobile-nav .mat-icon {
      margin-right: 16px;
    }

    @media (max-width: 768px) {
      .nav-menu {
        display: none;
      }

      .mobile-menu-btn {
        display: block;
      }

      .logo-text {
        font-size: 16px;
      }

      .header-content {
        padding: 0 8px;
      }
    }

    @media (max-width: 480px) {
      .logo-text {
        display: none;
      }

      .join-btn span {
        display: none;
      }
    }
  `]
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  isAdmin = false;
  isMobile = false;
  mobileMenuOpen = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.checkAuthStatus();
    this.checkScreenSize();
    
    // Listen for auth changes
    this.authService.authStatus$.subscribe(status => {
      this.isLoggedIn = status.isLoggedIn;
      this.isAdmin = status.isAdmin;
    });

    // Listen for window resize
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  checkAuthStatus() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.isAdmin = this.authService.isAdmin();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
