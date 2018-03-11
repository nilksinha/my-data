import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessComponentComponent } from './sucess-component.component';

describe('SucessComponentComponent', () => {
  let component: SucessComponentComponent;
  let fixture: ComponentFixture<SucessComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
