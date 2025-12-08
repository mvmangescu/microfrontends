import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'mfs-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() fullWidth = false;
  @Output() clicked = new EventEmitter<MouseEvent>();

  @HostBinding('class.full-width')
  get isFullWidth(): boolean {
    return this.fullWidth;
  }

  get buttonClasses(): string {
    const classes = ['btn', `btn-${this.variant}`, `btn-${this.size}`];
    if (this.fullWidth) {
      classes.push('btn-full-width');
    }
    return classes.join(' ');
  }

  onClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}
