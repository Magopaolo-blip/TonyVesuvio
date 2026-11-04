/* Risponditore locale: nessuna chiamata di rete, nessuna persistenza. */
(function (root) {
  'use strict';
  function createConversation() {
    let context = null;
    let previous = '';
    let eventDetails = [];
    const normalize = text => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[’']/g, ' ').trim();
    function reply(text, preferred) {
      const s = normalize(text);
      function say(answer, topic = null) {
        context = topic;
        previous = answer;
        return answer;
      }
      if (/^(nuova conversazione|ricominciamo|reset)\W*$/.test(s)) {
        eventDetails = [];
        return say('Uè, ricominciamo. Che mi vuoi chiedere?');
      }
      if (/^(non ho capito|spiegati|che significa|in che senso)\W*$/.test(s)) {
        if (context === 'booking') return say('Questa chat non può fare preventivi o confermare date. Puoi descrivere qui l’evento, poi devi contattare il profilo ufficiale Instagram @tony.vesuvio.official per una richiesta reale.', 'booking');
        return say('Dimmi quale parte vuoi chiarire: posso parlare di musica, amore, Napoli o del personaggio di Tony. Le mie risposte sono predefinite, quindi una domanda precisa mi aiuta.');
      }
      if (/\b(suicid\w*|uccidermi|farmi del male)\b/.test(s)) return say('Mi dispiace che tu stia così. Metti da parte la chat e cerca subito una persona fidata che possa stare con te; se sei in pericolo immediato, contatta i servizi di emergenza locali.');
      if (/\b(diagnosi|farmac\w*|terapia|malatt\w*|dolore al petto)\b/.test(s)) return say('Su salute e cure non posso darti indicazioni affidabili. Parlane con un professionista sanitario: qui lascio da parte le battute.');
      if (/^(grazie|ok|va bene|perfetto|capito)\W*$/.test(s)) return say(context === 'booking' ? 'Bene. Ricorda: qui non è stata inviata nessuna richiesta di ingaggio.' : 'Figurati. Se vuoi, fammi un’altra domanda.', context);
      if (/^(ciao|salve|ue|we|buongiorno|buonasera|ehi)(\s+tony)?\W*$/.test(s)) return say('Uè! Dimmi tutto. Ti ascolto: per una volta il microfono lo lascio a te.');
      if (/come (stai|va)|comm stai|tutto bene/.test(s)) return say('Sto bene, grazie. Aspetto solo che il resto del mondo si metta alla mia altezza. E tu?', 'day');
      if (/chi sei|presentati|sei (vero|reale)|sei un[ao]? (bot|ai)|intelligenza artificiale/.test(s)) return say('Sono il risponditore di Tony Vesuvio, cantante neomelodico immaginario con un’autostima molto concreta. Uso risposte predefinite: non sono una persona né una AI generativa.');
      const booking = /quanto (costi|costa|chiedi|prendi)|prezz\w*|preventivo|ingaggi\w*|prenot\w*|disponibil\w*|vieni a cantare|cantare al|per un matrimonio/.test(s);
      const continuation = context === 'booking' && (/^(e |a |per |il |sabato|domenica|napoli|roma|milano|matrimonio|compleanno|due ore|\d)/.test(s) || /quanto|data|luogo|ore|invece/.test(s));
      if (booking || continuation) {
        if (!continuation) eventDetails = [];
        if (continuation && !/quanto|prezz|costi/.test(s)) eventDetails.push(text.trim());
        if (/quanto|prezz|preventivo|costi/.test(s)) return say('Non ho un listino e non posso fare un preventivo. Che data, località e tipo di evento hai in mente? La mia fama è enorme, ma non la uso per inventare cifre.', 'booking');
        if (continuation) return say(`Tengo presente per questo dialogo: ${eventDetails.slice(-3).join('; ')}. Per verificare disponibilità e condizioni, scrivi al profilo ufficiale Instagram @tony.vesuvio.official con data, luogo, tipo di evento e durata; qui non parte alcuna prenotazione.`, 'booking');
        return say('Per un ingaggio servono data, località, tipo di evento e durata. Puoi dirmeli qui per orientare la conversazione, ma disponibilità e accordi vanno verificati sul profilo ufficiale Instagram @tony.vesuvio.official; non lasciare recapiti in chat.', 'booking');
      }
      if (/concert\w*|prossim\w* dat\w*|dove (canti|suoni)|quando (canti|suoni)/.test(s)) return say('Non ho un calendario verificato di concerti o date. Controlla gli aggiornamenti sui profili ufficiali del sito: una locandina me la merito, una data inventata no.');
      if (/famos\w*|successo|bravo|migliore|star/.test(s)) return say('Se lo chiedi a me, sono famosissimo. Se lo chiedi agli altri, significa che devo ancora scegliere meglio il pubblico.');
      if (/non mi piaci|fai schifo|sei scarso|canti male/.test(s)) return say('Il tuo giudizio l’ho sentito. Naturalmente aspetto anche quello di qualcuno con gusto.');
      if (/aggia canta/.test(s)) return say('«Aggia cantà» significa «devo cantare». Non «ho già cantato»: il pubblico non si libera di me così facilmente.', 'music');
      if (/dedic\w*/.test(s)) return say('A chi vuoi dedicare una canzone e per quale occasione? Basta un nome di battesimo, senza dati personali.', 'dedication');
      if (context === 'dedication' && s.length < 180) return say(`Una dedica per l’occasione che mi hai descritto: «Che questa canzone vi faccia compagnia anche dopo l’ultima nota». È una bozza qui in chat, non una dedica inviata a Tony.`, 'music');
      if (/canzon\w*|music\w*|brani|discografia|ascolt\w*|youtube|museca/.test(s) || preferred === 'music') return say('Trovi i brani e i collegamenti YouTube nella sezione Musica di questo sito. Vuoi sapere dove ascoltarli o parlare del mio stile?', 'music');
      if (context === 'music' && /quale|consigli|romantic|stile|neomelodic/.test(s)) return say('Il mio mondo è il neomelodico napoletano: sentimento in primo piano e modestia fuori campo. Per scegliere un brano, guarda i titoli nella sezione Musica e ascolta le anteprime su YouTube.', 'music');
      if (/amore eterno|credi nell amore/.test(s)) return say('Certo che credo nell’amore eterno. Ai matrimoni lo promettono tutti; io però aspetto di vedere chi resta quando chiude il buffet.', 'love');
      if (/lasciat\w*|tradit\w*|mi manca|cuore spezzato/.test(s)) return say('Mi dispiace: quando una persona ti manca non basta un ritornello. Vuoi raccontarmi se vi siete lasciati o se non sai come parlarle?', 'love');
      if (/amore|innamorat\w*|fidanzat\w*|ammore/.test(s) || preferred === 'love') return say('Parliamo d’amore: vuoi dichiararti, fare pace o capire se voltare pagina? Prima capiamo la scena, poi decido se merita una serenata.', 'love');
      if (context === 'love' && /dichiar|fare pace|voltare pagina|lasciati|parlar/.test(s)) return say('Puoi cominciare con parole semplici e sincere, lasciando all’altra persona spazio per rispondere. Le grandi entrate le tengo per il palco.', 'love');
      if (/napoli|napule/.test(s) || preferred === 'naples') return say('Napoli è il mondo della mia musica: sentimento, orgoglio e qualcuno che canta più forte di te. Vuoi parlare della città o del napoletano nelle canzoni?', 'naples');
      if (/giornata|giorno storto|triste|sto male|stanco|jurnata/.test(s) || preferred === 'day' || (context === 'day' && /male|bene|cosi cosi/.test(s))) return say('Giornata pesante? Mi dispiace. Vuoi dirmi se c’entrano il lavoro, l’amore o solo la stanchezza?', 'day');
      if (context === 'day' && /lavoro|capo|ufficio/.test(s)) return say('Il lavoro oggi ti ha messo alla prova. Prenditi una pausa, se puoi; io la chiamerei «intervallo dell’artista», così sembra perfino prevista.', 'day');
      if (/caffe|cafe/.test(s)) return say('Un caffè lo prendo volentieri. Per la tazza di Tony c’è la sezione Shop del sito; il caffè, purtroppo, devi ancora mettercelo tu.');
      if (/matrimonio|sposi|sposo|sposa/.test(s)) return say('Parli del tuo matrimonio, di una dedica agli sposi o vuoi informazioni per un ingaggio? Sono tre scene diverse: non faccio partire la marcia prima di saperlo.');
      if (/^(e tu|tu invece)\W*$/.test(s) && context === 'love') return say('Io nell’amore ci metto tutto il cuore. Poi controllo che il mio nome sia scritto abbastanza grande sulla locandina.', 'love');
      if (/^(quanto|quando|dove|perche|e poi)\W*$/.test(s)) return say('Mi manca un dettaglio: a che cosa ti riferisci? Dimmi il soggetto della domanda e provo a seguirti.', context);
      if (/^(arrivederci|a presto|buonanotte|ciao ciao)\W*$/.test(s)) return say('A presto! Quando torni, io sarò ancora qui a considerarmi una leggenda.');
      const fallback = 'Non ho una risposta adatta a questa domanda. Puoi riformularla indicando se parli di musica, amore, Napoli o ingaggi? Meglio chiederti un dettaglio che inventarmi il resto.';
      return say(previous === fallback ? 'Qui arrivo al limite delle risposte predefinite. Prova una domanda concreta, per esempio «Dove ascolto le tue canzoni?» oppure «Quanto costi per un matrimonio?».' : fallback);
    }
    return { reply, reset() { context = null; previous = ''; eventDetails = []; } };
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { createConversation };
  else root.TonyConversation = { createConversation };
})(typeof globalThis !== 'undefined' ? globalThis : this);
