import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallQueryComponent } from './ball-query.component';

describe('BallQueryComponent', () => {
  let component: BallQueryComponent;
  let fixture: ComponentFixture<BallQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BallQueryComponent]
    });
    fixture = TestBed.createComponent(BallQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
