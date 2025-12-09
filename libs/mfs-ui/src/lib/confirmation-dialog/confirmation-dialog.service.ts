import { Injectable, inject } from '@angular/core';
import { Dialog, DialogConfig } from '@angular/cdk/dialog';
import { Observable } from 'rxjs';
import {
  ConfirmationDialog,
  ConfirmationDialogData,
} from './confirmation-dialog';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationDialogService {
  private dialog = inject(Dialog);

  open(
    data: ConfirmationDialogData,
    config?: DialogConfig
  ): Observable<boolean | undefined> {
    const dialogRef = this.dialog.open<boolean>(ConfirmationDialog, {
      data,
      disableClose: config?.disableClose ?? false,
      hasBackdrop: config?.hasBackdrop ?? true,
      backdropClass: config?.backdropClass ?? 'cdk-overlay-dark-backdrop',
      width: config?.width,
      height: config?.height,
      minWidth: config?.minWidth,
      minHeight: config?.minHeight,
      maxWidth: config?.maxWidth,
      maxHeight: config?.maxHeight,
    });

    return dialogRef.closed as Observable<boolean | undefined>;
  }

  confirm(
    title: string,
    message: string,
    confirmText = 'Confirm',
    cancelText = 'Cancel'
  ): Observable<boolean | undefined> {
    return this.open({
      title,
      message,
      confirmText,
      cancelText,
      type: 'info',
    });
  }

  warn(
    title: string,
    message: string,
    confirmText = 'Confirm',
    cancelText = 'Cancel'
  ): Observable<boolean | undefined> {
    return this.open({
      title,
      message,
      confirmText,
      cancelText,
      type: 'warning',
    });
  }

  danger(
    title: string,
    message: string,
    confirmText = 'Delete',
    cancelText = 'Cancel'
  ): Observable<boolean | undefined> {
    return this.open({
      title,
      message,
      confirmText,
      cancelText,
      type: 'danger',
    });
  }

  success(
    title: string,
    message: string,
    confirmText = 'OK',
    cancelText = 'Cancel'
  ): Observable<boolean | undefined> {
    return this.open({
      title,
      message,
      confirmText,
      cancelText,
      type: 'success',
    });
  }
}
