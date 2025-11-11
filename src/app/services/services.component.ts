import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  imports: [FormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  nome: string | undefined;
  descrizione: string | undefined;
  prezzo: number | undefined;

  salva(): void {
    console.log("CIAO");
    
  }

}
