import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelocactionComponent } from './updatelocaction.component';

describe('UpdatelocactionComponent', () => {
  let component: UpdatelocactionComponent;
  let fixture: ComponentFixture<UpdatelocactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatelocactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatelocactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
