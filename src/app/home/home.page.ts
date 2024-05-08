import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  binario: string = '';
  decimal: number | null = null;
  erro: string = '';


  constructor() {}

  public converter() {
    if (!this.ehBinario(this.binario)) {
      this.erro = 'Por favor, digite um número binário válido (0 ou 1).';
      this.decimal = null;
      return;
    }

    this.decimal = parseInt(this.binario, 2);
    this.erro = '';
  }

  ehBinario(b: string): boolean {
    for (let i = 0; i < b.length; i++) {
      if (b[i] !== '0' && b[i] !== '1') {
        return false;
      }
    }
    return true;
  }

}
