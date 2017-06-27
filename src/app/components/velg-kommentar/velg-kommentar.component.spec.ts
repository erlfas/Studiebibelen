import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelgKommentarComponent } from './velg-kommentar.component';

describe('VelgKommentarComponent', () => {
  let component: VelgKommentarComponent;
  let fixture: ComponentFixture<VelgKommentarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelgKommentarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelgKommentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
