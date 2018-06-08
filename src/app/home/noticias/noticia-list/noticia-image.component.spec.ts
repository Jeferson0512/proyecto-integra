import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaImageComponent } from './noticia-image.component';

describe('NoticiaImageComponent', () => {
  let component: NoticiaImageComponent;
  let fixture: ComponentFixture<NoticiaImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiaImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
