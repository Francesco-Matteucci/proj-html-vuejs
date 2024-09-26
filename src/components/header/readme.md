## Descrizione dei componenti dell'Header

* **`AppHeader.vue`:**
    * Contiene la struttura generale dell'header e importa gli altri componenti.
    * Include `AppLogo` e `AppNavigation`.

* **`AppLogo.vue`:**
    * Visualizza il logo dell'applicazione.
    * Utilizza un'immagine e un link.

* **`AppNavigation.vue`:**
    * Gestisce la navigazione principale dell'header.
    * Contiene i link alle diverse sezioni del sito.
    * Include menu a tendina per alcune sezioni, utilizzando il componente `AppDropdownMenu`.
    * Gestisce l'apertura e la chiusura dei menu a tendina tramite eventi `mouseover` e `mouseleave`.
    * Include icone per la ricerca e il carrello.

* **`AppDropdownMenu.vue`:**
    * Visualizza i menu a tendina.
    * Riceve un array di oggetti `menuItems` come prop, contenente il testo e il link di ogni voce del menu.
    * Utilizza `v-for` per generare dinamicamente le voci del menu.
    * Ha uno stile personalizzato per il menu a tendina e le sue voci.



## Struttura del progetto
```
src/
├── components/
│   ├── header/
│   │   ├── AppHeader.vue     
│   │   ├── AppLogo.vue        
│   │   ├── AppNavigation.vue   
│   │   └── AppDropdownMenu.vue 
│   ├── AppMain.vue
│   └── AppFooter.vue
├── App.vue                   



