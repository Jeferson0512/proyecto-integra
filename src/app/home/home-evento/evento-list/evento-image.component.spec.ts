import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoImageComponent } from './evento-image.component';

describe('EventoImageComponent', () => {
  let component: EventoImageComponent;
  let fixture: ComponentFixture<EventoImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
