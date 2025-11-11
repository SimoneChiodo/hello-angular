export class Prodotto {

  nome: string | undefined;
  descrizione: string | undefined;
  prezzo: number | undefined;

  // Costruttore
  constructor(varNome: string | undefined, varDescrizione: string | undefined, varPrezzo: number | undefined) {
    this.nome = varNome;
    this.descrizione = varDescrizione;
    this.prezzo = varPrezzo;
  }
}
