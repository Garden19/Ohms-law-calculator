import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { NewCalculation } from '../../Models/newCalculation';

@Component({
  selector: 'app-calculator',
  imports: [ReactiveFormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {

  isSafe: boolean | null = null;
  safe = false;

  Calculator = new FormGroup({
    userVoltage: new FormControl(0, Validators.required),
    userCoilResistance: new FormControl(0, Validators.required),
    userBatteryAmpRating: new FormControl(0, Validators.required),
  })

  onAddCalculation() {
    const newCalculation: NewCalculation = {
      userVoltage: this.Calculator.value.userVoltage ?? 0,
      userCoilResistance: this.Calculator.value.userCoilResistance ?? 0,
      userBatteryAmpRating: this.Calculator.value.userBatteryAmpRating ?? 0,
    };
    
    let userVoltage = newCalculation.userVoltage;
    let userCoilResistance = newCalculation.userCoilResistance;
    let userBatteryAmpRating = newCalculation.userBatteryAmpRating;
    const userAmps = userVoltage / userCoilResistance;
    
    if (userAmps > userBatteryAmpRating) {
      this.isSafe = false;
      this.safe = false;
    } else {
      this.isSafe = true;
      this.safe = true;
    }
  }
}