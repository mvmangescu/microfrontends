import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MfsUi } from './mfs-ui';

describe('MfsUi', () => {
  let component: MfsUi;
  let fixture: ComponentFixture<MfsUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfsUi],
    }).compileComponents();

    fixture = TestBed.createComponent(MfsUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
