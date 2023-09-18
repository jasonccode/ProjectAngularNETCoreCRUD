import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerComentarioComponent } from './ver-comentario.component';

describe('VerComentarioComponent', () => {
  let component: VerComentarioComponent;
  let fixture: ComponentFixture<VerComentarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerComentarioComponent]
    });
    fixture = TestBed.createComponent(VerComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
