export class Prodotto {

  nome: string | undefined;
  descrizione: string | undefined;
  prezzo: number | undefined;

  // Costruttore
  constructor(varNome: string, varDescrizione: string, varPrezzo: number) {
    this.nome = varNome;
    this.descrizione = varDescrizione;
    this.prezzo = varPrezzo;
  }
}
