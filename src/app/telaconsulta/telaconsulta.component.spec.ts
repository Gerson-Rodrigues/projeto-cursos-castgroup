import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaconsultaComponent } from './telaconsulta.component';

describe('TelaconsultaComponent', () => {
  let component: TelaconsultaComponent;
  let fixture: ComponentFixture<TelaconsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaconsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
