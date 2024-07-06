import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddiEditEmployeeComponent } from './addi-edit-employee.component';

describe('AddiEditEmployeeComponent', () => {
  let component: AddiEditEmployeeComponent;
  let fixture: ComponentFixture<AddiEditEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddiEditEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddiEditEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
