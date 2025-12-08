import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Icon } from './icon';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Icon', () => {
  let component: Icon;
  let fixture: ComponentFixture<Icon>;
  let compiled: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Icon],
    }).compileComponents();

    fixture = TestBed.createComponent(Icon);
    component = fixture.componentInstance;
    compiled = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an SVG element', () => {
    const svg = compiled.query(By.css('svg'));
    expect(svg).toBeTruthy();
  });

  it('should have default icon name as "home"', () => {
    expect(component.name).toBe('home');
  });

  it('should have default size as "md"', () => {
    expect(component.size).toBe('md');
  });

  it('should apply the correct size class for "sm"', () => {
    component.size = 'sm';
    expect(component.sizeClass).toBe('w-4 h-4');
  });

  it('should apply the correct size class for "md"', () => {
    component.size = 'md';
    expect(component.sizeClass).toBe('w-6 h-6');
  });

  it('should apply the correct size class for "lg"', () => {
    component.size = 'lg';
    expect(component.sizeClass).toBe('w-8 h-8');
  });

  it('should apply the correct size class for "xl"', () => {
    component.size = 'xl';
    expect(component.sizeClass).toBe('w-12 h-12');
  });

  it('should return correct path for "home" icon', () => {
    component.name = 'home';
    expect(component.iconPath).toContain('M3 12l2-2m0 0l7-7 7 7M5 10v10a1');
  });

  it('should return correct path for "user" icon', () => {
    component.name = 'user';
    expect(component.iconPath).toContain('M16 7a4 4 0 11-8 0');
  });

  it('should return correct path for "settings" icon', () => {
    component.name = 'settings';
    expect(component.iconPath).toContain('M10.325 4.317c.426-1.756');
  });

  it('should return correct path for "menu" icon', () => {
    component.name = 'menu';
    expect(component.iconPath).toBe('M4 6h16M4 12h16M4 18h16');
  });

  it('should return correct path for "close" icon', () => {
    component.name = 'close';
    expect(component.iconPath).toBe('M6 18L18 6M6 6l12 12');
  });

  it('should return correct path for "check" icon', () => {
    component.name = 'check';
    expect(component.iconPath).toBe('M5 13l4 4L19 7');
  });

  it('should return correct path for "arrow-right" icon', () => {
    component.name = 'arrow-right';
    expect(component.iconPath).toBe('M14 5l7 7m0 0l-7 7m7-7H3');
  });

  it('should return correct path for "arrow-left" icon', () => {
    component.name = 'arrow-left';
    expect(component.iconPath).toBe('M10 19l-7-7m0 0l7-7m-7 7h18');
  });

  it('should apply custom color when provided', () => {
    component.color = '#FF0000';
    fixture.detectChanges();
    const svg = compiled.query(By.css('svg'));
    expect(svg.nativeElement.getAttribute('stroke')).toBe('#FF0000');
  });

  it('should use "currentColor" when no color is provided', () => {
    component.color = undefined;
    fixture.detectChanges();
    const svg = compiled.query(By.css('svg'));
    expect(svg.nativeElement.getAttribute('stroke')).toBe('currentColor');
  });

  it('should update icon path when name changes', () => {
    component.name = 'home';
    const homePath = component.iconPath;

    component.name = 'user';
    const userPath = component.iconPath;

    expect(homePath).not.toBe(userPath);
  });

  it('should render path element with correct d attribute', () => {
    component.name = 'check';
    fixture.detectChanges();
    const path = compiled.query(By.css('path'));
    expect(path.nativeElement.getAttribute('d')).toBe('M5 13l4 4L19 7');
  });
});
