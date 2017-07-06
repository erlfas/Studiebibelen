import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelgBibeltekstComponent } from './velg-bibeltekst.component';

describe('VelgBibeltekstComponent', () => {
  let component: VelgBibeltekstComponent;
  let fixture: ComponentFixture<VelgBibeltekstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelgBibeltekstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelgBibeltekstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
