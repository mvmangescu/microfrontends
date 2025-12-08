import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type IconName = 'home' | 'user' | 'settings' | 'menu' | 'close' | 'check' | 'arrow-right' | 'arrow-left';
export type IconSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'lib-icon',
  imports: [CommonModule],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  @Input() name: IconName = 'home';
  @Input() size: IconSize = 'md';
  @Input() color?: string;

  get sizeClass(): string {
    const sizeMap = {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-12 h-12'
    };
    return sizeMap[this.size];
  }

  get iconPath(): string {
    const icons: Record<IconName, string> = {
      'home': 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      'user': 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      'settings': 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      'menu': 'M4 6h16M4 12h16M4 18h16',
      'close': 'M6 18L18 6M6 6l12 12',
      'check': 'M5 13l4 4L19 7',
      'arrow-right': 'M14 5l7 7m0 0l-7 7m7-7H3',
      'arrow-left': 'M10 19l-7-7m0 0l7-7m-7 7h18'
    };
    return icons[this.name];
  }
}
