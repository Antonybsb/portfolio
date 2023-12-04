import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoPdfComponent } from './curriculo-pdf.component';

describe('CurriculoPdfComponent', () => {
  let component: CurriculoPdfComponent;
  let fixture: ComponentFixture<CurriculoPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurriculoPdfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurriculoPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
