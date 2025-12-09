import type { Meta, StoryObj } from '@storybook/angular';
import { Component, inject } from '@angular/core';
import { Button } from '../button/button';
import { ConfirmationDialogService } from './confirmation-dialog.service';

@Component({
  selector: 'mfs-confirmation-dialog-demo',
  imports: [Button],
  template: `
    <div
      style="display: flex; flex-direction: column; gap: 1rem; padding: 2rem;"
    >
      <h2>Confirmation Dialog Demo</h2>
      <p>Click the buttons below to see different dialog types:</p>

      <mfs-button variant="primary" (clicked)="openInfo()">
        Open Info Dialog
      </mfs-button>

      <mfs-button variant="primary" (clicked)="openSuccess()">
        Open Success Dialog
      </mfs-button>

      <mfs-button variant="primary" (clicked)="openWarning()">
        Open Warning Dialog
      </mfs-button>

      <mfs-button variant="danger" (clicked)="openDanger()">
        Open Danger Dialog
      </mfs-button>

      <mfs-button variant="outline" (clicked)="openNonDismissible()">
        Open Non-Dismissible Dialog
      </mfs-button>

      @if (lastResult !== null) {
      <div
        style="padding: 1rem; background: #f3f4f6; border-radius: 0.5rem; margin-top: 1rem;"
      >
        <strong>Last Result:</strong>
        {{ lastResult ? 'Confirmed' : 'Cancelled' }}
      </div>
      }
    </div>
  `,
})
class ConfirmationDialogDemoComponent {
  private confirmationService = inject(ConfirmationDialogService);
  lastResult: boolean | null = null;

  openInfo(): void {
    this.confirmationService
      .confirm(
        'Information',
        'This is an informational dialog. Do you want to proceed?'
      )
      .subscribe((result) => {
        this.lastResult = result ?? false;
      });
  }

  openSuccess(): void {
    this.confirmationService
      .success(
        'Success!',
        'Your operation was successful. Would you like to continue?'
      )
      .subscribe((result) => {
        this.lastResult = result ?? false;
      });
  }

  openWarning(): void {
    this.confirmationService
      .warn(
        'Warning',
        'This action may have consequences. Are you sure you want to continue?'
      )
      .subscribe((result) => {
        this.lastResult = result ?? false;
      });
  }

  openDanger(): void {
    this.confirmationService
      .danger(
        'Delete Item',
        'This action cannot be undone. Are you sure you want to delete this item?',
        'Delete'
      )
      .subscribe((result) => {
        this.lastResult = result ?? false;
      });
  }

  openNonDismissible(): void {
    this.confirmationService
      .confirm(
        'Non-Dismissible Dialog',
        'This dialog cannot be dismissed by clicking outside or pressing ESC. You must click a button.',
        'Confirm',
        'Cancel',
        true
      )
      .subscribe((result) => {
        this.lastResult = result ?? false;
      });
  }
}

const meta: Meta<ConfirmationDialogDemoComponent> = {
  component: ConfirmationDialogDemoComponent,
  title: 'ConfirmationDialog',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ConfirmationDialogDemoComponent>;

export const Default: Story = {};
