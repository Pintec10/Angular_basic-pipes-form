import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0;
  fuelConsumed: number = 0;
  distance: number = 0;
  unit: string = 'km';
  car = {
    make: 'Fiat',
    model: 'Punto',
    year: 2000
  }


  onNameChange(target: EventTarget | null) {
    const value = (target as HTMLInputElement).value;
    this.name = value;
  }

  onDateChange(target: EventTarget | null) {
    const value = (target as HTMLInputElement).value;
    this.date = value;
  }

  onAmountChange(target: EventTarget | null) {
    const value = parseFloat((target as HTMLInputElement).value);
    if (!Number.isNaN(value)) {
      this.amount = value;
    } else {
      this.amount = 0;
    }
  }

  onFuelConsumedChange(target: EventTarget | null) {
    const value = parseFloat((target as HTMLInputElement).value);
    if (!Number.isNaN(value)) {
      this.fuelConsumed = value;
    } else {
      this.fuelConsumed = 0;
    }
  }

  onDistanceChange(target: EventTarget | null) {
    const value = parseFloat((target as HTMLInputElement).value);
    if (!Number.isNaN(value)) {
      this.distance = value;
    } else {
      this.distance = 0;
    }
  }

  onUnitChange(target: EventTarget | null) {
    const value = (target as HTMLInputElement).value;
    this.unit = value;
  }
}
