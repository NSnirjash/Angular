import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLocationComponent } from './update-location.component';

describe('UpdateLocationComponent', () => {
  let component: UpdateLocationComponent;
  let fixture: ComponentFixture<UpdateLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
