import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdeatelocationComponent } from './updeatelocation.component';

describe('UpdeatelocationComponent', () => {
  let component: UpdeatelocationComponent;
  let fixture: ComponentFixture<UpdeatelocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdeatelocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdeatelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
