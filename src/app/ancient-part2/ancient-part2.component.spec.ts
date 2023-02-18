import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncientPartTwoComponent } from './ancient-part2.component';

describe('AncientBeginComponent', () => {
  let component: AncientPartTwoComponent;
  let fixture: ComponentFixture<AncientPartTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AncientPartTwoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AncientPartTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
