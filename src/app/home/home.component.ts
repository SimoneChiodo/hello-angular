import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  elencoMacchine: string[] = ["Lamborghini", "Fiat", "BMW", "Subaru"]

  elencoStudenti: any = [
    { nome: "Maurizio", cognome: "Rossi", matricola: "ABC123" },
    { nome: "Valentino", cognome: "Bianchi", matricola: "ABC124" },
    { nome: "Rosa", cognome: "Panza", matricola: "ABC125" },
  ]

}
