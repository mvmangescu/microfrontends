import {
  Component,
  inject,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Button } from '../button/button';
import { Icon, IconName } from '../icon/icon';

export interface ConfirmationDialogData {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: 'info' | 'warning' | 'danger' | 'success';
}

@Component({
  selector: 'mfs-confirmation-dialog',
  imports: [CommonModule, Button, Icon],
  templateUrl: './confirmation-dialog.html',
  styleUrl: './confirmation-dialog.scss',
})
export class ConfirmationDialog implements AfterViewInit {
  dialogRef = inject<DialogRef<boolean>>(DialogRef);
  data = inject<ConfirmationDialogData>(DIALOG_DATA);

  @ViewChild('cancelButton', { read: ElementRef })
  cancelButtonRef?: ElementRef<HTMLElement>;

  constructor() {
    // Set defaults
    this.data.confirmText = this.data.confirmText || 'Confirm';
    this.data.cancelText = this.data.cancelText || 'Cancel';
    this.data.type = this.data.type || 'info';
  }

  ngAfterViewInit(): void {
    // Focus the cancel button after view initializes
    if (this.cancelButtonRef?.nativeElement) {
      // Use setTimeout to ensure the button is fully rendered
      setTimeout(() => {
        // Find the actual button element within the mfs-button component
        const buttonElement =
          this.cancelButtonRef?.nativeElement.querySelector('button');
        buttonElement?.focus();
      }, 0);
    }
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  get iconName(): IconName {
    const iconMap: Record<string, IconName> = {
      info: 'info',
      warning: 'warning',
      danger: 'error',
      success: 'check-circle',
    };
    return iconMap[this.data.type || 'info'];
  }
}
