import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminToolsListComponent } from './admin-tools-list.component';

describe('AdminToolsListComponent', () => {
  let component: AdminToolsListComponent;
  let fixture: ComponentFixture<AdminToolsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminToolsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminToolsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
