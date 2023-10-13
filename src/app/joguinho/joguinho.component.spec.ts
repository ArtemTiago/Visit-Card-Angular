import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoguinhoComponent } from './joguinho.component';

describe('JoguinhoComponent', () => {
  let component: JoguinhoComponent;
  let fixture: ComponentFixture<JoguinhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoguinhoComponent]
    });
    fixture = TestBed.createComponent(JoguinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
