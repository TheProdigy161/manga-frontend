import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaUpdateComponent } from './manga-update.component';

describe('MangaUpdateComponent', () => {
  let component: MangaUpdateComponent;
  let fixture: ComponentFixture<MangaUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MangaUpdateComponent]
    });
    fixture = TestBed.createComponent(MangaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
