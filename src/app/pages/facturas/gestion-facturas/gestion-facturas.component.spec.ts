import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFacturasComponent } from './gestion-facturas.component';

describe('GestionFacturasComponent', () => {
  let component: GestionFacturasComponent;
  let fixture: ComponentFixture<GestionFacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionFacturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
