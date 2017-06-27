import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KommentarPanelComponent } from './kommentar-panel.component';

describe('KommentarPanelComponent', () => {
  let component: KommentarPanelComponent;
  let fixture: ComponentFixture<KommentarPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KommentarPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KommentarPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
