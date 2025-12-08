import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Button } from './button';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;
  let buttonElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button],
    }).compileComponents();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
    buttonElement = fixture.debugElement.query(By.css('button'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a button element', () => {
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.nativeElement.tagName).toBe('BUTTON');
  });

  describe('variant', () => {
    it('should have primary variant by default', () => {
      expect(component.variant).toBe('primary');
      expect(buttonElement.nativeElement.classList.contains('btn-primary')).toBe(true);
    });

    it('should apply secondary variant', () => {
      component.variant = 'secondary';
      fixture.detectChanges();
      expect(buttonElement.nativeElement.classList.contains('btn-secondary')).toBe(true);
    });

    it('should apply outline variant', () => {
      component.variant = 'outline';
      fixture.detectChanges();
      expect(buttonElement.nativeElement.classList.contains('btn-outline')).toBe(true);
    });

    it('should apply ghost variant', () => {
      component.variant = 'ghost';
      fixture.detectChanges();
      expect(buttonElement.nativeElement.classList.contains('btn-ghost')).toBe(true);
    });

    it('should apply danger variant', () => {
      component.variant = 'danger';
      fixture.detectChanges();
      expect(buttonElement.nativeElement.classList.contains('btn-danger')).toBe(true);
    });
  });

  describe('size', () => {
    it('should have md size by default', () => {
      expect(component.size).toBe('md');
      expect(buttonElement.nativeElement.classList.contains('btn-md')).toBe(true);
    });

    it('should apply small size', () => {
      component.size = 'sm';
      fixture.detectChanges();
      expect(buttonElement.nativeElement.classList.contains('btn-sm')).toBe(true);
    });

    it('should apply large size', () => {
      component.size = 'lg';
      fixture.detectChanges();
      expect(buttonElement.nativeElement.classList.contains('btn-lg')).toBe(true);
    });
  });

  describe('disabled', () => {
    it('should not be disabled by default', () => {
      expect(component.disabled).toBe(false);
      expect(buttonElement.nativeElement.disabled).toBe(false);
    });

    it('should be disabled when disabled input is true', () => {
      component.disabled = true;
      fixture.detectChanges();
      expect(buttonElement.nativeElement.disabled).toBe(true);
    });

    it('should not emit clicked event when disabled', () => {
      component.disabled = true;
      fixture.detectChanges();

      spyOn(component.clicked, 'emit');
      buttonElement.nativeElement.click();

      expect(component.clicked.emit).not.toHaveBeenCalled();
    });
  });

  describe('type', () => {
    it('should have button type by default', () => {
      expect(component.type).toBe('button');
      expect(buttonElement.nativeElement.type).toBe('button');
    });

    it('should support submit type', () => {
      component.type = 'submit';
      fixture.detectChanges();
      expect(buttonElement.nativeElement.type).toBe('submit');
    });

    it('should support reset type', () => {
      component.type = 'reset';
      fixture.detectChanges();
      expect(buttonElement.nativeElement.type).toBe('reset');
    });
  });

  describe('fullWidth', () => {
    it('should not be full width by default', () => {
      expect(component.fullWidth).toBe(false);
      expect(buttonElement.nativeElement.classList.contains('btn-full-width')).toBe(false);
    });

    it('should apply full width class when fullWidth is true', () => {
      component.fullWidth = true;
      fixture.detectChanges();
      expect(buttonElement.nativeElement.classList.contains('btn-full-width')).toBe(true);
    });
  });

  describe('click event', () => {
    it('should emit clicked event when button is clicked', () => {
      spyOn(component.clicked, 'emit');
      buttonElement.nativeElement.click();
      expect(component.clicked.emit).toHaveBeenCalled();
    });

    it('should pass MouseEvent to clicked emitter', () => {
      let emittedEvent: MouseEvent | undefined;
      component.clicked.subscribe((event: MouseEvent) => {
        emittedEvent = event;
      });

      buttonElement.nativeElement.click();
      expect(emittedEvent).toBeDefined();
      expect(emittedEvent instanceof MouseEvent).toBe(true);
    });
  });

  describe('buttonClasses', () => {
    it('should return base classes', () => {
      const classes = component.buttonClasses;
      expect(classes).toContain('btn');
      expect(classes).toContain('btn-primary');
      expect(classes).toContain('btn-md');
    });

    it('should include full width class when fullWidth is true', () => {
      component.fullWidth = true;
      const classes = component.buttonClasses;
      expect(classes).toContain('btn-full-width');
    });

    it('should not include full width class when fullWidth is false', () => {
      component.fullWidth = false;
      const classes = component.buttonClasses;
      expect(classes).not.toContain('btn-full-width');
    });
  });

  describe('content projection', () => {
    it('should project content', () => {
      const testFixture = TestBed.createComponent(Button);
      const compiled = testFixture.nativeElement;
      testFixture.detectChanges();

      expect(compiled.querySelector('button')).toBeTruthy();
    });
  });
});
