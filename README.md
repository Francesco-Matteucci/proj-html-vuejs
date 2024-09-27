# Progetto Avada Fitness

## Membri del Team
- **Francesco Matteucci**
- **Marco Cappellato**
- **Tanara Cavalcante**
- **Daniele Innamorato**

## Panoramica
Questo progetto è un sito web di fitness realizzato utilizzando tecnologie moderne per lo sviluppo web. Il sito è completamente responsivo, include animazioni fluide e un layout user-friendly. La struttura del progetto segue l'architettura a componenti offerta da Vue.js.

## Struttura del Progetto
Il progetto è strutturato in modo pulito e modulare grazie a Vue.js. Di seguito la struttura delle cartelle:

### `src/`
- `assets/`
  - `img/` : Contiene le immagini del sito.
- `components/`
  - `footer/`
    - **`AppFooter.vue`** : Componente per il footer del sito.
  - `general/`
    - **`AppLogo.vue`** : Componente per il logo del sito.
    - **`BaseMediaList.vue`** : Lista delle icone social e altre sezioni di media.
  - `header/`
    - **`AppHeader.vue`** : Componente per la header del sito.
    - **`AppNavigation.vue`** : Componente per la barra di navigazione.
    - **`DropdownMenu.vue`** : Componente per i menu a tendina nella navbar.
    - **`StickyButtons.vue`** : Pulsanti sticky sulla destra della pagina.
  - `main/`
    - **`AppMain.vue`** : Componente principale della pagina.
    - **`AppMainCrossfitDay.vue`** : Sezione "Crossfit workout of the day".
    - **`AppMainPartnersList.vue`** : Lista dei partner di fitness.
    - **`AppMainPartnersListCard.vue`** : Carta con i dettagli di ciascun partner.
    - **`BaseHero.vue`** : Componente per la sezione "Hero" della pagina.
    - **`ItemPlans.vue`** : Componente per visualizzare i piani di allenamento.
    - **`MainBuyAvada.vue`** : Sezione per l'acquisto di Avada.
    - **`MainIntoPlaylist.vue`** : Sezione con le playlist di allenamento.
    - **`MainNewsletter.vue`** : Componente per la newsletter.
    - **`MainPlans.vue`** : Componente che mostra i piani principali di allenamento.
    - **`TestimonialSection.vue`** : Sezione delle testimonianze.
    - **`ScrollToTop.vue`** : Bottone per scorrere verso l'alto.
- **`App.vue`** : Punto di partenza del progetto Vue.js.
- **`main.js`** : File principale per l'inizializzazione di Vue e l'integrazione delle librerie.
- **`style.scss`** : Foglio di stile principale in Sass.



## Strumenti e Tecnologie
- **Vue.js**: Il progetto è costruito utilizzando Vue.js, sfruttando l'architettura basata su componenti.
- **Bootstrap**: Bootstrap 5 è usato per la gestione del layout e per garantire un design completamente responsivo su tutti i dispositivi.
- **FontAwesome**: Usato per mostrare le icone sul sito.
- **Sass (SCSS)**: Utilizzato per migliorare la gestione degli stili e creare una struttura CSS modulare e pulita.
- **AOS (Animate On Scroll)**: Implementato per animazioni fluide che vengono attivate allo scorrimento della pagina.

## Funzionalità Principali
1. **Design Responsivo**: Grazie a Bootstrap, il layout si adatta perfettamente a tutte le dimensioni dello schermo.
2. **Header e Footer Personalizzati**: Un header con navigazione a tendina e un footer con post recenti, informazioni di contatto e link ai social media.
3. **Bottoni Sticky**: Pulsanti azione sticky posizionati sulla destra dello schermo per una navigazione rapida.
4. **Pulsante Scroll-to-Top**: Un pulsante fisso nell'angolo in basso a destra dello schermo che, se cliccato, riporta l'utente all'inizio della pagina.
5. **Animazioni Dinamiche**: Grazie ad AOS, gli elementi vengono animati in modo fluido mentre l'utente scorre la pagina.
6. **Sezioni Principali**: La homepage include sezioni come post recenti, partner, testimonianze e molto altro.
7. **Icone e Link Social**: FontAwesome fornisce icone per i social media e altri elementi come il carrello e il pulsante di ricerca.

## Riepilogo Tecnologico
- **Bootstrap**: Per il sistema di griglia e il design responsivo.
- **FontAwesome**: Per le icone usate sul sito.
- **AOS**: Per le animazioni fluide attivate dallo scorrimento.
- **Sass (SCSS)**: Per gestire gli stili in modo modulare e pulito.

## Istruzioni per il Setup
1. Clonare il repository.
2. Installare le dipendenze con `npm install`.
3. Eseguire il server di sviluppo con `npm run dev`.
4. Per costruire il progetto per la produzione, utilizzare `npm run build`.

## Contributi
Questo progetto è stato sviluppato in collaborazione da Francesco Matteucci, Marco Cappellato, Tanara Cavalcante e Daniele Innamorato. Ogni membro del team ha contribuito a vari aspetti del layout, della funzionalità e delle animazioni.

---

© 2024 - Sviluppato da Francesco Matteucci, Marco Cappellato, Tanara Cavalcante, Daniele Innamorato