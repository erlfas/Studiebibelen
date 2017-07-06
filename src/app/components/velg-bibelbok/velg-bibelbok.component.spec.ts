import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelgBibelbokComponent } from './velg-bibelbok.component';

describe('VelgBibelbokComponent', () => {
  let component: VelgBibelbokComponent;
  let fixture: ComponentFixture<VelgBibelbokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelgBibelbokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelgBibelbokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
