import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TictacToeComponent } from './tictac-toe.component';

describe('TictacToeComponent', () => {
  let component: TictacToeComponent;
  let fixture: ComponentFixture<TictacToeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TictacToeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TictacToeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
