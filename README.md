# BrainJobs

### PROGETTO DEL CORSO DI SISTEMI DISTRIBUITI

1. [OVERVIEW DEL PROGETTO](#overview-del-progetto)
2. [UTILIZZO](#utilizzo) 
3. [CREDITI](#crediti) 

## OVERVIEW DEL PROGETTO

BrainJobs è un (ipotetico) servizio cloud di tipo Software-as-a-Service (SaaS) che offre ai suoi utenti la possibilità di “allenare” modelli di apprendimento automatico, di valutarne le prestazioni ed (eventualmente) riutilizzarli per effettuare simulazioni.

Il sistema permette agli utenti di effettuare richieste di allenamento o simulazione caricando i dati insieme al modello o utilizzandone uno già precedentemente allenato e salvato nel proprio archivio. In base al linguaggio o al framework utilizzato per il codice del modello, BrainJobs lancia la computazione in un particolare ambiente di esecuzione che verrà istanziato “on-the-fly” in un’altra piattaforma cloud di tipo Serverless basata su containers (es: Apache OpenWhisk, Knative, ...).

Gli utenti possono sottomettere più richieste consecutive. Esse verranno gestite in parallelo in un sistema a coda. Ogni richiesta di un utente corrisponde ad un task di lavoro (job).

Gli utenti possono controllare lo stato delle loro richieste dalla dashboard di BrainJobs, ed una volta terminate, visualizzarne i risultati. Successivamente, il sistema permette di scartare o salvare il modello per utilizzi futuri.

L’architettura del servizio BrainJobs è suddivisa in tanti servizi e componenti, ognuno con un compito ben specifico. Al vostro team, è richiesta la creazione di due componenti:

1. un componente di frontend implementato utilizzando HTML, CSS e JavaScript che utilizza il paradigma AJAX per inviare/ricevere dati
2. un componente di backend che espone una HTTP API REST

Il frontend deve permettere ad un utente di creare una nuova richiesta di allenamento, visualizzare la lista delle sue richieste e visualizzare le informazioni di dettaglio di ogni richiesta.

Il backend deve essere in grado di salvare una nuova richiesta, fornire la lista delle richieste di un utente e restituire informazioni di dettaglio di ogni richiesta.

Una volta che il backend ha salvato una nuova richiesta, altri servizi di BrainJobs si occuperanno di lanciare la computazione, aggiornare lo stato del job ed aggiungere i risultati. Il compito del vostro team è *esclusivamente* quello fornire un frontend ed un backend con le funzionalità sopra indicate.

## UTILIZZO

### Docker
###### Creare l'immagine docker del progetto
```bash
docker build -t brainjobs .
```
###### Avviare l'immagine docker creata
```bash
docker run -d -p 8080:8080 -p 8081:8081 -p 8082:8082 brainjobs
```

### Manuale
###### Avviare il web-server del backend
```bash
cd brainjobs-backend # entra nella sottocartella
npm install # installazione delle dipendenze
node index.js & # avvio del web-server in background
cd .. # esci dalla sottocartella
```
###### Avviare il web-server del gateway
```bash
cd brainjobs-gateway # entra nella sottocartella
npm install # installazione delle dipendenze
node index.js & # avvio del web-server in background
cd .. # esci dalla sottocartella
```

## CREDITI

| [<img src="https://avatars.githubusercontent.com/u/31136677?v=4" width="100px;" alt="dlcgold"/><br /><sub><b>dlcgold</b></sub>](https://github.com/dlcgold) | [<img src="https://avatars.githubusercontent.com/u/4183824?v=4" width="100px;" alt="derogab"/><br /><sub><b>derogab</b></sub>](https://github.com/derogab) | 
| :---: | :---: |
