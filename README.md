# Tony Vesuvio — sito aggiornato

Estrarre lo ZIP e caricare il suo contenuto nella radice del repository GitHub, mantenendo la cartella assets. Sostituire i file con lo stesso nome. Non caricare lo ZIP come singolo file e non creare una cartella contenitore.

CNAME mantiene tonyvesuvio.com. Il certificato HTTPS si gestisce in Settings → Pages → Enforce HTTPS.

Include: social ufficiali, shop Redbubble esistente, layout responsive, immagini fotografiche alleggerite, metadati Open Graph e immagine di condivisione.

La visualizzazione delle anteprime dipende anche dalla raggiungibilità HTTPS del dominio e dalla cache di WhatsApp; non è garantito un aggiornamento immediato.

## Dillo a Tony — aggiornamento locale

Risponditore gratuito, senza API o servizi esterni. Italiano: riconoscimento di intenti e contesto temporaneo; anche con interfaccia napoletana le nuove risposte sono in italiano. Le altre lingue conservano il precedente risponditore. Il contesto si azzera ricaricando la pagina, cambiando lingua o scrivendo «ricominciamo». Non invia richieste di ingaggio e non conserva messaggi dopo la chiusura.

Caricare insieme index.html, dillo-a-tony.js e tony-conversation.js nella radice del sito. Nessuna pubblicazione eseguita da questa copia locale. Verifica automatica: node ../test-tony.cjs (20 scenari, 33 messaggi).
