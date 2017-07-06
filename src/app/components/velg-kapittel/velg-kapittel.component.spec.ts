import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelgKapittelComponent } from './velg-kapittel.component';

describe('VelgKapittelComponent', () => {
  let component: VelgKapittelComponent;
  let fixture: ComponentFixture<VelgKapittelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelgKapittelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelgKapittelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
