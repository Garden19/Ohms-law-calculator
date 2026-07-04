import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { NewCalculation } from '../models/new-calculation';
import { BatterySelector } from "../components/battery-selector/battery-selector";
import { Battery } from '../models/battery'

@Component({
  selector: 'app-calculator',
  imports: [ReactiveFormsModule, BatterySelector],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {

  isSafe: boolean | null = null;
  safe = false;

  calculatorForm = new FormGroup({
    userVoltage: new FormControl(0, Validators.required),
    userCoilResistance: new FormControl(0, Validators.required),
    userBatteryAmpRating: new FormControl(0, Validators.required),
  })

  onBatterySelected(battery: Battery) {
    this.calculatorForm.patchValue({
      userVoltage: battery.voltage,
      userBatteryAmpRating: battery.ampRating,
    })
  }

  async onAddCalculation() {
    const newCalculation: NewCalculation = {
      userVoltage: this.calculatorForm.value.userVoltage ?? 0,
      userCoilResistance: this.calculatorForm.value.userCoilResistance ?? 0,
      userBatteryAmpRating: this.calculatorForm.value.userBatteryAmpRating ?? 0,
    };
    
    let userVoltage = newCalculation.userVoltage;
    let userCoilResistance = newCalculation.userCoilResistance;
    let userBatteryAmpRating = newCalculation.userBatteryAmpRating;
    const userAmps = userVoltage / userCoilResistance;
    
    if (userAmps > userBatteryAmpRating) {
      this.isSafe = false;
    } else {
      this.isSafe = true;
    }
    setTimeout(() => {
        this.isSafe = null;
        this.calculatorForm.reset({
          userVoltage: 0,
          userCoilResistance: 0,
          userBatteryAmpRating: 0,
        })
    }, 3000);
  }
}