import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  includeUpperLetters = false;

  password = '';

  onInput(value: any) {
    let values = value.target.value;
    const parsedValue = parseInt(values);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
  useLetters() {
    this.includeLetters = !this.includeLetters;
  }
  useUpperLetters() {
    this.includeUpperLetters = !this.includeUpperLetters;
  }
  useNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  useSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    const UpperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let validChar = '';
    if (this.includeLetters) {
      validChar += letters;
    }
    if (this.includeUpperLetters) {
      validChar += UpperLetters;
    }
    if (this.includeNumbers) {
      validChar += numbers;
    }
    if (this.includeSymbols) {
      validChar += symbols;
    }
    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChar.length);
      generatedPassword += validChar[index];
    }

    this.password = generatedPassword;
  }
}
