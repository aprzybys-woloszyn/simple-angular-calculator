import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple angular calculator';
  result = 'result';

  public number1: number;
  public number2: number;
  public outcome: number;

  add() {
    this.outcome = this.number1 + this.number2;
  }

  substract() {
    this.outcome = this.number1 - this.number2;
  }

  multiply() {
    this.outcome = this.number1 * this.number2;
  }

  divide() {
    this.outcome = this.number1 / this.number2;
  }
}
