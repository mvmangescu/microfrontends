import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Layout } from './layout';
import { Icon } from '@microfrontends/mfs-ui';
import { provideRouter } from '@angular/router';

describe('Layout', () => {
  let component: Layout;
  let fixture: ComponentFixture<Layout>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layout, Icon],
      providers: [
        provideRouter([
          { path: '', component: Layout },
          { path: 'identity', component: Layout },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Layout);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Component initialization', () => {
    it('should initialize with sidebar open by default', () => {
      expect(component.sidebarOpen()).toBe(true);
    });

    it('should initialize with sidebar not collapsed by default', () => {
      expect(component.sidebarCollapsed()).toBe(false);
    });

    it('should have navigation items defined', () => {
      expect(component.navigationItems).toBeDefined();
      expect(component.navigationItems.length).toBe(2);
    });

    it('should have correct navigation items structure', () => {
      const dashboardItem = component.navigationItems[0];
      expect(dashboardItem.title).toBe('Dashboards');
      expect(dashboardItem.icon).toBe('home');
      expect(dashboardItem.route).toBe('/');

      const identityItem = component.navigationItems[1];
      expect(identityItem.title).toBe('Identity');
      expect(identityItem.icon).toBe('user');
      expect(identityItem.route).toBe('/identity');
    });
  });

  describe('toggleSidebar', () => {
    it('should toggle sidebar from open to closed', () => {
      component.sidebarOpen.set(true);
      component.toggleSidebar();
      expect(component.sidebarOpen()).toBe(false);
    });

    it('should toggle sidebar from closed to open', () => {
      component.sidebarOpen.set(false);
      component.toggleSidebar();
      expect(component.sidebarOpen()).toBe(true);
    });

    it('should toggle multiple times correctly', () => {
      const initialState = component.sidebarOpen();
      component.toggleSidebar();
      expect(component.sidebarOpen()).toBe(!initialState);
      component.toggleSidebar();
      expect(component.sidebarOpen()).toBe(initialState);
    });
  });

  describe('toggleSidebarCollapse', () => {
    it('should toggle sidebar collapse from false to true', () => {
      component.sidebarCollapsed.set(false);
      component.toggleSidebarCollapse();
      expect(component.sidebarCollapsed()).toBe(true);
    });

    it('should toggle sidebar collapse from true to false', () => {
      component.sidebarCollapsed.set(true);
      component.toggleSidebarCollapse();
      expect(component.sidebarCollapsed()).toBe(false);
    });

    it('should toggle collapse multiple times correctly', () => {
      const initialState = component.sidebarCollapsed();
      component.toggleSidebarCollapse();
      expect(component.sidebarCollapsed()).toBe(!initialState);
      component.toggleSidebarCollapse();
      expect(component.sidebarCollapsed()).toBe(initialState);
    });
  });

  describe('onSettingsClick', () => {
    it('should log to console when called', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      component.onSettingsClick();
      expect(consoleSpy).toHaveBeenCalledWith('Settings clicked');
    });
  });

  describe('onUserClick', () => {
    it('should log to console when called', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      component.onUserClick();
      expect(consoleSpy).toHaveBeenCalledWith('User clicked');
    });
  });

  describe('Template rendering', () => {
    it('should render top navbar', () => {
      const navbar = fixture.nativeElement.querySelector('.top-navbar');
      expect(navbar).toBeTruthy();
    });

    it('should render brand text', () => {
      const brandText = fixture.nativeElement.querySelector('.brand-text');
      expect(brandText).toBeTruthy();
      expect(brandText.textContent).toBe('Microfrontends');
    });

    it('should render menu toggle button', () => {
      const menuToggle = fixture.nativeElement.querySelector('.menu-toggle');
      expect(menuToggle).toBeTruthy();
    });

    it('should render settings button', () => {
      const buttons = fixture.nativeElement.querySelectorAll('.icon-btn');
      expect(buttons.length).toBeGreaterThanOrEqual(2);
    });

    it('should render sidebar', () => {
      const sidebar = fixture.nativeElement.querySelector('.sidebar');
      expect(sidebar).toBeTruthy();
    });

    it('should render main content area', () => {
      const mainContent = fixture.nativeElement.querySelector('.main-content');
      expect(mainContent).toBeTruthy();
    });

    it('should render router outlet', () => {
      const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
      expect(routerOutlet).toBeTruthy();
    });

    it('should render all navigation items', () => {
      const navItems = fixture.nativeElement.querySelectorAll('.nav-item');
      expect(navItems.length).toBe(2);
    });

    it('should render navigation links with correct text', () => {
      const navTexts = fixture.nativeElement.querySelectorAll('.nav-text');
      expect(navTexts[0].textContent.trim()).toBe('Dashboards');
      expect(navTexts[1].textContent.trim()).toBe('Identity');
    });

    it('should render sidebar overlay when sidebar is open', () => {
      component.sidebarOpen.set(true);
      fixture.detectChanges();
      const overlay = fixture.nativeElement.querySelector('.sidebar-overlay');
      expect(overlay).toBeTruthy();
    });

    it('should not render sidebar overlay when sidebar is closed', () => {
      component.sidebarOpen.set(false);
      fixture.detectChanges();
      const overlay = fixture.nativeElement.querySelector('.sidebar-overlay');
      expect(overlay).toBeFalsy();
    });
  });

  describe('Template interactions', () => {
    it('should call toggleSidebar when menu toggle button is clicked', () => {
      const toggleSpy = jest.spyOn(component, 'toggleSidebar');
      const menuToggle = fixture.nativeElement.querySelector('.menu-toggle');
      menuToggle.click();
      expect(toggleSpy).toHaveBeenCalled();
    });

    it('should call toggleSidebar when menu toggle button receives Enter key', () => {
      const toggleSpy = jest.spyOn(component, 'toggleSidebar');
      const menuToggle = fixture.nativeElement.querySelector('.menu-toggle');
      const event = new KeyboardEvent('keyup', { key: 'Enter' });
      menuToggle.dispatchEvent(event);
      expect(toggleSpy).toHaveBeenCalled();
    });

    it('should call onSettingsClick when settings button is clicked', () => {
      const settingsSpy = jest.spyOn(component, 'onSettingsClick');
      const buttons = fixture.nativeElement.querySelectorAll('.icon-btn');
      const settingsButton = buttons[0];
      settingsButton.click();
      expect(settingsSpy).toHaveBeenCalled();
    });

    it('should call onSettingsClick when settings button receives Enter key', () => {
      const settingsSpy = jest.spyOn(component, 'onSettingsClick');
      const buttons = fixture.nativeElement.querySelectorAll('.icon-btn');
      const settingsButton = buttons[0];
      const event = new KeyboardEvent('keyup', { key: 'Enter' });
      settingsButton.dispatchEvent(event);
      expect(settingsSpy).toHaveBeenCalled();
    });

    it('should call onUserClick when user button is clicked', () => {
      const userSpy = jest.spyOn(component, 'onUserClick');
      const buttons = fixture.nativeElement.querySelectorAll('.icon-btn');
      const userButton = buttons[1];
      userButton.click();
      expect(userSpy).toHaveBeenCalled();
    });

    it('should call onUserClick when user button receives Enter key', () => {
      const userSpy = jest.spyOn(component, 'onUserClick');
      const buttons = fixture.nativeElement.querySelectorAll('.icon-btn');
      const userButton = buttons[1];
      const event = new KeyboardEvent('keyup', { key: 'Enter' });
      userButton.dispatchEvent(event);
      expect(userSpy).toHaveBeenCalled();
    });

    it('should call toggleSidebar when sidebar overlay is clicked', () => {
      component.sidebarOpen.set(true);
      fixture.detectChanges();
      const toggleSpy = jest.spyOn(component, 'toggleSidebar');
      const overlay = fixture.nativeElement.querySelector('.sidebar-overlay');
      overlay.click();
      expect(toggleSpy).toHaveBeenCalled();
    });

    it('should call toggleSidebar when sidebar overlay receives Enter key', () => {
      component.sidebarOpen.set(true);
      fixture.detectChanges();
      const toggleSpy = jest.spyOn(component, 'toggleSidebar');
      const overlay = fixture.nativeElement.querySelector('.sidebar-overlay');
      const event = new KeyboardEvent('keyup', { key: 'Enter' });
      overlay.dispatchEvent(event);
      expect(toggleSpy).toHaveBeenCalled();
    });

    it('should add "open" class to sidebar when sidebarOpen is true', () => {
      component.sidebarOpen.set(true);
      fixture.detectChanges();
      const sidebar = fixture.nativeElement.querySelector('.sidebar');
      expect(sidebar.classList.contains('open')).toBe(true);
    });

    it('should remove "open" class from sidebar when sidebarOpen is false', () => {
      component.sidebarOpen.set(false);
      fixture.detectChanges();
      const sidebar = fixture.nativeElement.querySelector('.sidebar');
      expect(sidebar.classList.contains('open')).toBe(false);
    });
  });

  describe('Accessibility', () => {
    it('should have keyboard navigation support on menu toggle', () => {
      const menuToggle = fixture.nativeElement.querySelector('.menu-toggle');
      const toggleSpy = jest.spyOn(component, 'toggleSidebar');
      const event = new KeyboardEvent('keyup', { key: 'Enter' });
      menuToggle.dispatchEvent(event);
      expect(toggleSpy).toHaveBeenCalled();
    });

    it('should have keyboard navigation support on settings button', () => {
      const buttons = fixture.nativeElement.querySelectorAll('.icon-btn');
      const settingsButton = buttons[0];
      const settingsSpy = jest.spyOn(component, 'onSettingsClick');
      const event = new KeyboardEvent('keyup', { key: 'Enter' });
      settingsButton.dispatchEvent(event);
      expect(settingsSpy).toHaveBeenCalled();
    });

    it('should have keyboard navigation support on user button', () => {
      const buttons = fixture.nativeElement.querySelectorAll('.icon-btn');
      const userButton = buttons[1];
      const userSpy = jest.spyOn(component, 'onUserClick');
      const event = new KeyboardEvent('keyup', { key: 'Enter' });
      userButton.dispatchEvent(event);
      expect(userSpy).toHaveBeenCalled();
    });

    it('should have tabindex on sidebar overlay for keyboard accessibility', () => {
      component.sidebarOpen.set(true);
      fixture.detectChanges();
      const overlay = fixture.nativeElement.querySelector('.sidebar-overlay');
      expect(overlay.getAttribute('tabindex')).toBe('0');
    });

    it('should have proper button types', () => {
      const menuToggle = fixture.nativeElement.querySelector('.menu-toggle');
      expect(menuToggle.tagName.toLowerCase()).toBe('button');

      const buttons = fixture.nativeElement.querySelectorAll('.icon-btn');
      buttons.forEach((button: HTMLElement) => {
        expect(button.tagName.toLowerCase()).toBe('button');
      });
    });
  });

  describe('Navigation links', () => {
    it('should have routerLink directive on navigation links', () => {
      const navLinks = fixture.nativeElement.querySelectorAll('.nav-link');
      expect(navLinks.length).toBe(2);
      // Verify links are anchor tags with proper structure
      expect(navLinks[0].tagName.toLowerCase()).toBe('a');
      expect(navLinks[1].tagName.toLowerCase()).toBe('a');
    });

    it('should have correct href attributes on navigation links', () => {
      const navLinks = fixture.nativeElement.querySelectorAll('.nav-link');
      // RouterLink should set href attributes
      expect(navLinks[0].getAttribute('href')).toBeTruthy();
      expect(navLinks[1].getAttribute('href')).toBeTruthy();
    });

    it('should apply active class when route is active', async () => {
      const navLinks = fixture.nativeElement.querySelectorAll('.nav-link');
      // Navigate to home route
      await router.navigate(['/']);
      fixture.detectChanges();
      await fixture.whenStable();

      // Check that the first link has active class
      expect(navLinks[0].classList.contains('active')).toBe(true);
    });
  });
});
