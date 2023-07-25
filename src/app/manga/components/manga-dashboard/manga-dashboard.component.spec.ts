import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaDashboardComponent } from './manga-dashboard.component';

describe('MangaDashboardComponent', () => {
  let component: MangaDashboardComponent;
  let fixture: ComponentFixture<MangaDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MangaDashboardComponent]
    });
    fixture = TestBed.createComponent(MangaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
