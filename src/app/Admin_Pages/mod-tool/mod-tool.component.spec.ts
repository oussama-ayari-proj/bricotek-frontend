import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModToolComponent } from './mod-tool.component';

describe('AddToolComponent', () => {
  let component: ModToolComponent;
  let fixture: ComponentFixture<ModToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
