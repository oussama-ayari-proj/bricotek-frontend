import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogeOutilsComponent } from './cataloge-outils.component';

describe('CatalogeOutilsComponent', () => {
  let component: CatalogeOutilsComponent;
  let fixture: ComponentFixture<CatalogeOutilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogeOutilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogeOutilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
