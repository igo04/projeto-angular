import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvformComponent } from './advform.component';

describe('AdvformComponent', () => {
  let component: AdvformComponent;
  let fixture: ComponentFixture<AdvformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
