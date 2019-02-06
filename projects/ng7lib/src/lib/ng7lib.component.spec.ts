import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng7libComponent } from './ng7lib.component';

describe('Ng7libComponent', () => {
  let component: Ng7libComponent;
  let fixture: ComponentFixture<Ng7libComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng7libComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng7libComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
