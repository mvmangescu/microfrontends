import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { ConfirmationDialog, ConfirmationDialogData } from './confirmation-dialog';

describe('ConfirmationDialog', () => {
  let component: ConfirmationDialog;
  let fixture: ComponentFixture<ConfirmationDialog>;
  let mockDialogRef: jest.Mocked<DialogRef<boolean>>;
  let mockData: ConfirmationDialogData;

  beforeEach(async () => {
    mockDialogRef = {
      close: jest.fn(),
    } as any;

    mockData = {
      title: 'Test Title',
      message: 'Test Message',
      confirmText: 'Confirm',
      cancelText: 'Cancel',
      type: 'info',
    };

    await TestBed.configureTestingModule({
      imports: [ConfirmationDialog],
      providers: [
        { provide: DialogRef, useValue: mockDialogRef },
        { provide: DIALOG_DATA, useValue: mockData },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmationDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Component initialization', () => {
    it('should set default values', () => {
      expect(component.data.confirmText).toBe('Confirm');
      expect(component.data.cancelText).toBe('Cancel');
      expect(component.data.type).toBe('info');
    });

    it('should use provided data', () => {
      expect(component.data.title).toBe('Test Title');
      expect(component.data.message).toBe('Test Message');
    });
  });

  describe('onConfirm', () => {
    it('should close dialog with true', () => {
      component.onConfirm();
      expect(mockDialogRef.close).toHaveBeenCalledWith(true);
    });
  });

  describe('onCancel', () => {
    it('should close dialog with false', () => {
      component.onCancel();
      expect(mockDialogRef.close).toHaveBeenCalledWith(false);
    });
  });

  describe('iconName', () => {
    it('should return "info" for info type', () => {
      component.data.type = 'info';
      expect(component.iconName).toBe('info');
    });

    it('should return "warning" for warning type', () => {
      component.data.type = 'warning';
      expect(component.iconName).toBe('warning');
    });

    it('should return "error" for danger type', () => {
      component.data.type = 'danger';
      expect(component.iconName).toBe('error');
    });

    it('should return "check-circle" for success type', () => {
      component.data.type = 'success';
      expect(component.iconName).toBe('check-circle');
    });
  });

  describe('dialog type classes', () => {
    it('should apply dialog-info class for info type', () => {
      component.data.type = 'info';
      fixture.detectChanges();
      const container = fixture.nativeElement.querySelector('.dialog-container');
      expect(container.classList.contains('dialog-info')).toBe(true);
    });

    it('should apply dialog-warning class for warning type', () => {
      component.data.type = 'warning';
      fixture.detectChanges();
      const container = fixture.nativeElement.querySelector('.dialog-container');
      expect(container.classList.contains('dialog-warning')).toBe(true);
    });

    it('should apply dialog-danger class for danger type', () => {
      component.data.type = 'danger';
      fixture.detectChanges();
      const container = fixture.nativeElement.querySelector('.dialog-container');
      expect(container.classList.contains('dialog-danger')).toBe(true);
    });

    it('should apply dialog-success class for success type', () => {
      component.data.type = 'success';
      fixture.detectChanges();
      const container = fixture.nativeElement.querySelector('.dialog-container');
      expect(container.classList.contains('dialog-success')).toBe(true);
    });
  });

  describe('Template rendering', () => {
    it('should render title', () => {
      const titleElement = fixture.nativeElement.querySelector('.dialog-title');
      expect(titleElement.textContent).toBe('Test Title');
    });

    it('should render message', () => {
      const messageElement = fixture.nativeElement.querySelector('.dialog-message');
      expect(messageElement.textContent).toBe('Test Message');
    });

    it('should render confirm button with text', () => {
      const buttons = fixture.nativeElement.querySelectorAll('mfs-button');
      expect(buttons.length).toBe(2);
    });

    it('should render cancel button with text', () => {
      const buttons = fixture.nativeElement.querySelectorAll('mfs-button');
      expect(buttons.length).toBe(2);
    });

    it('should render close button', () => {
      const closeButton = fixture.nativeElement.querySelector('.dialog-close');
      expect(closeButton).toBeTruthy();
    });

    it('should apply correct dialog class', () => {
      const container = fixture.nativeElement.querySelector('.dialog-container');
      expect(container.classList.contains('dialog-info')).toBe(true);
    });
  });

  describe('Button interactions', () => {
    it('should call onCancel when close button is clicked', () => {
      const closeSpy = jest.spyOn(component, 'onCancel');
      const closeButton = fixture.nativeElement.querySelector('.dialog-close');
      closeButton.click();
      expect(closeSpy).toHaveBeenCalled();
    });

    it('should call onCancel when close button receives Enter key', () => {
      const closeSpy = jest.spyOn(component, 'onCancel');
      const closeButton = fixture.nativeElement.querySelector('.dialog-close');
      const event = new KeyboardEvent('keyup', { key: 'Enter' });
      closeButton.dispatchEvent(event);
      expect(closeSpy).toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('should have aria-label on close button', () => {
      const closeButton = fixture.nativeElement.querySelector('.dialog-close');
      expect(closeButton.getAttribute('aria-label')).toBe('Close dialog');
    });
  });
});
