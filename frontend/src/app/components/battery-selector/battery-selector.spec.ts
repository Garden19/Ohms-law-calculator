import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatterySelector } from './battery-selector';

describe('BatterySelector', () => {
  let component: BatterySelector;
  let fixture: ComponentFixture<BatterySelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatterySelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatterySelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
