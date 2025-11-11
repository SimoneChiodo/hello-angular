# Progetto Angular: Hello Angular

## 📖 Descrizione
**Hello Angular** è una **web app single-page (SPA)** sviluppata in **Angular** come parte di un [corso pratico su Udemy](https://www.udemy.com/course/angular-base-componenti-routing-form-giovanni-pace/).

Il progetto nasce con l’obiettivo di comprendere i concetti fondamentali di **Angular**, tra cui la creazione di componenti, il **routing**, la **gestione dei form** e l’integrazione con **Bootstrap** per un design moderno e responsivo.

L’applicazione comprende **più pagine** navigate dinamicamente tramite router, una **navbar** interattiva e la **gestione di dati e input** attraverso componenti e binding bidirezionale (`ngModel`).


## 🎯 Obiettivo
Questo progetto ha lo scopo di mettere in pratica i concetti chiave del framework **Angular** in modo concreto e graduale.  
Gli obiettivi principali sono:
- Capire come creare e organizzare **componenti riutilizzabili**.  
- Implementare il **routing** per la navigazione tra più pagine.  
- Integrare **Bootstrap** per creare interfacce moderne e responsive.  
- Gestire **liste e dati dinamici** tramite TypeScript e `*ngFor`.  
- Sincronizzare **form e input utente** con il codice tramite `ngModel`.  
- Creare e visualizzare **oggetti personalizzati** a partire dai dati inseriti dall’utente.  


## 🌍 Funzionalità principali
- **Routing tra componenti**  
  Utilizzo del `RouterModule` e del `routerLink` nella navbar per navigare dinamicamente tra le diverse pagine.  

- **Navbar con Bootstrap**  
  Barra di navigazione responsive realizzata con Bootstrap e integrata nel componente principale.  

- **Pagine principali**  
  - `Home`: mostra due liste di dati generate in TypeScript, visualizzate come **lista ordinata** e **tabella**.  
  - `Servizi`: contiene un form che, al salvataggio, crea un nuovo **oggetto Prodotto** (istanza di una classe TypeScript) e lo visualizza in una tabella.  
  - `Contatti`: include un form con **binding bidirezionale** per email, password, selettori e checkbox, sincronizzati in tempo reale con il codice.  
  - `About`: pagina informativa statica come esempio aggiuntivo di routing.  

- **Gestione dei dati in tempo reale**  
  I campi dei form vengono sincronizzati con le variabili del componente tramite `[(ngModel)]`, permettendo aggiornamenti immediati sullo schermo.  


## 🛠️ Tecnologie utilizzate
- **Angular 17+** → framework front-end per lo sviluppo della SPA.  
- **TypeScript** → linguaggio tipizzato per logica e gestione dei dati.  
- **HTML e CSS** → struttura e stile dei componenti.  
- **Bootstrap 5** → libreria CSS per la creazione di layout responsive e navbar.  
- **Angular Router** → gestione delle rotte e della navigazione interna.  


## 🎓 Corso di riferimento
Questo progetto è stato realizzato seguendo il corso:  
[**"Angular Base: Componenti, Routing e Form in Azione"**](https://www.udemy.com/course/angular-base-componenti-routing-form-giovanni-pace/) su [Udemy](https://www.udemy.com/)  
Un percorso pensato per chi desidera imparare Angular in modo pratico, sviluppando passo dopo passo una vera applicazione web moderna.
