import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Icon, IconName } from '@microfrontends/mfs-ui';

interface NavigationItem {
  title: string;
  icon: IconName;
  route: string;
}

@Component({
  selector: 'app-layout',
  imports: [CommonModule, RouterModule, Icon],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  sidebarOpen = signal(true);
  sidebarCollapsed = signal(false);

  navigationItems: NavigationItem[] = [
    {
      title: 'Dashboards',
      icon: 'home' as IconName,
      route: '/',
    },
    {
      title: 'Identity',
      icon: 'user' as IconName,
      route: '/identity',
    },
  ];

  toggleSidebar() {
    this.sidebarOpen.update((value) => !value);
  }

  toggleSidebarCollapse() {
    this.sidebarCollapsed.update((value) => !value);
  }

  onSettingsClick() {
    // TODO: Implement settings functionality
    console.log('Settings clicked');
  }

  onUserClick() {
    // TODO: Implement user menu functionality
    console.log('User clicked');
  }
}
