import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { BatteryService } from '../../services/battery-service';
import { Battery } from '../../models/battery';

@Component({
  selector: 'app-battery-selector',
  imports: [],
  templateUrl: './battery-selector.html',
  styleUrl: './battery-selector.css',
})
export class BatterySelector implements OnInit {
  private batteryService = inject(BatteryService);

  batteries: Battery[] = [];

  @Output() batterySelected = new EventEmitter<Battery>()

  ngOnInit(){
    this.batteryService.getBatteries().subscribe({
      next: (batteries) => {
        this.batteries = batteries;
      },
      error: (error) => {
        console.error('failed to load batteries', error)
      }
    })
  }

  onBatteryChange(event: Event) {
    const selectedId = Number((event.target as HTMLSelectElement).value);

    const selectedBattery = this.batteries.find(
      battery => battery.id === selectedId
    );

    if (selectedBattery) {
      this.batterySelected.emit(selectedBattery);
    }
  }
}
