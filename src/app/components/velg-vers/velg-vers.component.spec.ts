import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelgVersComponent } from './velg-vers.component';

describe('VelgVersComponent', () => {
  let component: VelgVersComponent;
  let fixture: ComponentFixture<VelgVersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelgVersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelgVersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
