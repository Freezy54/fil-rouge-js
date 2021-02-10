import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosNewComponent } from './heros-new.component';

describe('HerosNewComponent', () => {
  let component: HerosNewComponent;
  let fixture: ComponentFixture<HerosNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
