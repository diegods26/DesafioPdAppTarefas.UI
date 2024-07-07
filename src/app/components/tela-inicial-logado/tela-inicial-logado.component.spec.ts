import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialLogadoComponent } from './tela-inicial-logado.component';

describe('TelaInicialLogadoComponent', () => {
  let component: TelaInicialLogadoComponent;
  let fixture: ComponentFixture<TelaInicialLogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaInicialLogadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaInicialLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
