import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncientBeginComponent } from './ancient-begin.component';

describe('AncientBeginComponent', () => {
  let component: AncientBeginComponent;
  let fixture: ComponentFixture<AncientBeginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AncientBeginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AncientBeginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
