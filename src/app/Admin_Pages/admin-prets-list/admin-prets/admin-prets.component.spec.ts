import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPretsComponent } from './admin-prets.component';

describe('AdminPretsComponent', () => {
  let component: AdminPretsComponent;
  let fixture: ComponentFixture<AdminPretsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPretsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPretsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
