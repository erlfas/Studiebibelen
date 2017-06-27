import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibelPanelComponent } from './bibel-panel.component';

describe('BibelPanelComponent', () => {
  let component: BibelPanelComponent;
  let fixture: ComponentFixture<BibelPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibelPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibelPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
