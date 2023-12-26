import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EauComponent } from './eau.component';

describe('EauComponent', () => {
  let component: EauComponent;
  let fixture: ComponentFixture<EauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EauComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
