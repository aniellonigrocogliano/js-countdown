## Consegna
Esercizio di oggi: Buon anno
nome repo: js-countdown
Descrizione:
Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"
Iniziate stampando il countdown nella console e dopo stampatelo in pagina.
:warning: CHI PROVA AD USARE IL CICLO FOR PER QUESTO ESERCIZIO SARÀ MANDATO INDIETRO NEL TEMPO PER RIVEDERE LA LEZIONE DI OGGI :joy::joy::joy:
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
:star2: Bonus per i più curiosi:
In una cartella a parte create il cronometro che mostra secondi e minuti.
Inserite un bottone per avviare il cronometro, un'altro bottone per stoppare il cronometro e un'altro bottone ancora per resettare il cronometro.
Dopo averlo implementato fatevi questa domanda:
:thinking_face: che cosa succede se utente clicca sull'avvia più volte?

## Svolgimento esercizio countdown
- [x] Impostare una tempo iniziale di 10 secondi e stamparlo a video
- [x] creare una funzione che ad ogni secondo diminuisca di uno il tempo iniziale
- [x] ad ogni interazione della funzione cambiare di conseguenza il countdown a video
- [x] al raggiungimento dello 0 bloccare il countdown
- [x] stampare a video buon anno
## Svolgimento esercizio cronometro
- [x] Creo funzione cronometro che incrementa di uno i secondi ad ogni secondo
- [x] Nella funzione cronometro al raggiungimento di 60 secondi aumento di uno i minuti
- [x] Nella funzione cronometro richiamo la funzione stampa che stampa a video minuti e secondi
- [x] Richiamo il bottone avvia e passo la funzione cronometro al click dell'utente
- [x] Richiamo il bottone stop che blocca il cronometro
- [x] richiamo il bottone reset per resetare il tutto e portare ilo cronometro a 0
- [x] creo una variabile flag che controlla se il cronometro è in esecuzione
- [x] la variabile flag in caso sia impostata su true e l'utente clicca su avvia evita l'esecuzione doppia della funzione cronometro
- [x] nel momento del reset e dello stop la variabile flag viene riempostata su false per poter permettere all'ìutente di poter ricliccare avvia
