import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCheckerComponent } from './table-checker.component';

describe('TableCheckerComponent', () => {
  let component: TableCheckerComponent;
  let fixture: ComponentFixture<TableCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCheckerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
