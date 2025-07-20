import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutCategoryMenuComponent } from './prodcut-category-menu.component';

describe('ProdcutCategoryMenuComponent', () => {
  let component: ProdcutCategoryMenuComponent;
  let fixture: ComponentFixture<ProdcutCategoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdcutCategoryMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdcutCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
