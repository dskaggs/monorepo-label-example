import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeDataTableComponent } from './awesome-data-table.component';

describe('AwesomeDataTableComponent', () => {
  let component: AwesomeDataTableComponent;
  let fixture: ComponentFixture<AwesomeDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwesomeDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
