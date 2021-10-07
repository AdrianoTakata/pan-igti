import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackSelecaoComponent } from './back-selecao.component';

describe('BackSelecaoComponent', () => {
  let component: BackSelecaoComponent;
  let fixture: ComponentFixture<BackSelecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackSelecaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackSelecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
