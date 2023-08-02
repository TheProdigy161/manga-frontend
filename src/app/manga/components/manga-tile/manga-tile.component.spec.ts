import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaTileComponent } from './manga-tile.component';

describe('MangaTileComponent', () => {
  let component: MangaTileComponent;
  let fixture: ComponentFixture<MangaTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MangaTileComponent]
    });
    fixture = TestBed.createComponent(MangaTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
