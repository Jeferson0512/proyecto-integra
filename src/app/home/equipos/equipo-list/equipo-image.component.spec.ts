import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoImageComponent } from './equipo-image.component';

describe('EquipoImageComponent', () => {
  let component: EquipoImageComponent;
  let fixture: ComponentFixture<EquipoImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipoImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
