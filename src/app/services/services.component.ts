import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Prodotto } from '../models/prodotto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [FormsModule, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  nome: string | undefined;
  descrizione: string | undefined;
  prezzo: number | undefined;

  elencoProdotto: Prodotto[] = new Array();

  salva(): void {
    let prodotto = new Prodotto(this.nome, this.descrizione, this.prezzo);
    // console.log(prodotto);
    this.elencoProdotto.push(prodotto)
  }

}
