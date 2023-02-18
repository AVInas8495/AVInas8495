import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernPartComponent } from './modern-part.component';

describe('ModernPartComponent', () => {
  let component: ModernPartComponent;
  let fixture: ComponentFixture<ModernPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModernPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModernPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
