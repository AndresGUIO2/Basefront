import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnnqueryComponent } from './knnquery.component';

describe('KnnqueryComponent', () => {
  let component: KnnqueryComponent;
  let fixture: ComponentFixture<KnnqueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnnqueryComponent]
    });
    fixture = TestBed.createComponent(KnnqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
