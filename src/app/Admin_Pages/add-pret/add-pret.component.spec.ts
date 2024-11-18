import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPretComponent } from './add-pret.component';

describe('AddPretComponent', () => {
  let component: AddPretComponent;
  let fixture: ComponentFixture<AddPretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPretComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
