(() => {
  'use strict';
  const langSelect = document.querySelector('#site-language');
  const form = document.querySelector('#tony-chat');
  if (!form) return;
  const input = document.querySelector('#messaggio');
  const log = document.querySelector('#chat-log');
  const status = document.querySelector('#chat-status');
  const submit = form.querySelector('[type="submit"]');
  const label = form.querySelector('label[for="messaggio"]');
  const topics = [...form.querySelectorAll('[data-topic]')];
  const locale = {
    it:{label:'Che cosa vuoi dire a Tony?',placeholder:'Una domanda, una dedica, un pensiero…',send:'Dillo a Tony ↗',thinking:'Tony sta pensando…',topics:['Musica','Amore','Napoli','Giornata storta'],greet:'Uè! Accomodati, che qua pure il buongiorno entra con l’orchestra.',disclaimer:'Risponditore automatico di fantasia, ispirato al personaggio di Tony. I messaggi restano solo su questo dispositivo: non vengono inviati, salvati o pubblicati.',private:'Meglio senza recapiti personali: Tony tiene il telefono in camerino.',safe:'Per le cose serie ci vuole una persona vera accanto. Questa chat è solo un gioco di fantasia.'},
    en:{label:'What would you like to tell Tony?',placeholder:'A question, a dedication, a thought…',send:'Tell Tony ↗',thinking:'Tony is thinking…',topics:['Music','Love','Naples','Rough day'],greet:'Hey! Make yourself at home; even good morning arrives with an orchestra here.',disclaimer:'A playful automatic responder inspired by Tony’s character. Messages stay on this device: they are not sent, saved, or published.',private:'Let’s leave out personal contact details; Tony keeps his phone backstage.',safe:'For serious matters, please reach out to a real person you trust. This chat is only a bit of make-believe.'},
    'zh-Hans':{label:'你想对 Tony 说什么？',placeholder:'一个问题、一句献词、一段心里话……',send:'告诉 Tony ↗',thinking:'Tony 正在想……',topics:['音乐','爱情','那不勒斯','不顺的一天'],greet:'嗨！请坐，这里连一句早安都要带着乐队登场。',disclaimer:'一个受 Tony 角色启发的趣味自动回复器。消息只保留在此设备上，不会发送、保存或公开。',private:'请不要留下个人联系方式；Tony 把手机放在后台。',safe:'遇到重要难题，请联系你信任的真人。这只是一个幻想小游戏。'},
    ar:{label:'ماذا تريد أن تقول لتوني؟',placeholder:'سؤال، إهداء، أو خاطرة…',send:'قلها لتوني ↗',thinking:'توني يفكر…',topics:['الموسيقى','الحب','نابولي','يوم صعب'],greet:'أهلاً! تفضل، حتى صباح الخير هنا يدخل مع الأوركسترا.',disclaimer:'رد آلي مرح مستوحى من شخصية توني. تبقى الرسائل على هذا الجهاز ولا تُرسل أو تُحفظ أو تُنشر.',private:'من الأفضل عدم كتابة بيانات اتصال شخصية؛ هاتف توني في الكواليس.',safe:'للمسائل الجادة، تواصل مع شخص حقيقي تثق به. هذه الدردشة مجرد لعبة خيالية.'},
    fil:{label:'Ano ang gusto mong sabihin kay Tony?',placeholder:'Tanong, alay, o saloobin…',send:'Sabihin kay Tony ↗',thinking:'Nag-iisip si Tony…',topics:['Musika','Pag-ibig','Naples','Mahirap na araw'],greet:'Uy! Maupo ka; dito pati magandang umaga, may kasamang banda.',disclaimer:'Masayang awtomatikong tagasagot na hango sa karakter ni Tony. Nananatili sa device na ito ang mga mensahe; hindi ipinapadala, sine-save, o inilalathala.',private:'Huwag na tayong maglagay ng personal na contact details; nasa backstage ang phone ni Tony.',safe:'Para sa seryosong bagay, makipag-usap sa taong pinagkakatiwalaan mo. Kathang-isip na laro lang ito.'},
    nap:{label:'Che vuò dicere a Tony?',placeholder:'Na dimanna, na dedica, nu penziero…',send:'Dincello a Tony ↗',thinking:'Tony sta penzanno…',topics:['’A museca','’Ammore','Napule','Jurnata storta'],greet:'Uè! Assettateve, ca ccà pure ’o buongiorno trase cu ll’orchestra.',disclaimer:'Nu risponditore automatico ’e fantasia, ispirato ô personaggio ’e Tony. ’E messagge restano sulo ’ncopp’ a stu dispositivo: nun se mannano, nun se salvano e nun se pubblecano.',private:'Meglio senza recapiti personali: Tony tene ’o telefono ’int’ ô camerino.',safe:'Pe’ ’e cose serie ce vò na persona vera vicino. Sta chat è sulo nu juoco ’e fantasia.'}
  };
  const answers = {
    music:['Quella che ti resta in testa! Se dopo tre giorni non esce, ormai paga l’affitto.','The one that sticks in your head! If it’s still there after three days, it owes you rent.','就选那首挥之不去的歌！三天后还在脑海里，就该交房租啦。','الأغنية التي لا تفارق بالك! إذا بقيت ثلاثة أيام، فعليها أن تدفع الإيجار.','Yung kantang ayaw umalis sa isip mo! Kapag tatlong araw na, dapat nagbabayad na ng upa.','Chilla ca nun te vo’ lassà ’a capa! Si doppo tre juorne sta ancora llà, adda pavà ’o fitto.'],
    love:['L’amore è come il caffè: se è buono, non lo lasci raffreddare. Se scotta, soffia cantando.','Love is like coffee: if it’s good, don’t let it go cold. If it’s hot, blow on it in tune.','爱情像咖啡：好喝就别让它凉了；太烫的话，就边唱边吹一吹。','الحب مثل القهوة: إذا كان جميلاً فلا تدعه يبرد، وإذا كان ساخناً فانفخ عليه وأنت تغني.','Parang kape ang pag-ibig: kapag masarap, huwag palamigin. Kapag mainit, hipan habang kumakanta.','’Ammore è comm’ ’o cafè: si è buono nun ’o fa’ addiventà friddo. Si coce, soffia cantanno.'],
    naples:['Napoli non si visita soltanto: ti adotta, ti dà da mangiare e ti manda a casa con una canzone.','You don’t just visit Naples: it adopts you, feeds you, and sends you home with a song.','那不勒斯不只是去看看：它会收留你、请你吃饭，再送你回家时附上一首歌。','لا تزور نابولي فحسب؛ فهي تتبناك وتطعمك وترسلك إلى البيت ومعك أغنية.','Hindi mo lang binibisita ang Naples: iaampon ka nito, papakainin, at pauuwiin na may kanta.','Napule nun ’a visiti sulo: t’adotta, te fa magnà e te manna a casa cu na canzona.'],
    day:['Fai un respiro, metti un ritornello e raddrizza la giornata. Se non basta, almeno stoni con eleganza.','Take a breath, play a chorus, and straighten out the day. If that fails, at least sing off-key elegantly.','深呼吸，放一段副歌，把这一天扶正。要是还不行，至少也要优雅地跑调。','خذ نفساً، شغّل لازمة، وحاول تعديل يومك. وإن لم ينجح، فغنِّ خارج النغمة بأناقة.','Huminga, magpatugtog ng koro, at ayusin ang araw. Kung hindi umubra, pumiyok nang elegante.','Faje nu respiro, mette nu riturnello e stuta ’a jurnata. Si nun basta, almeno stune cu eleganza.'],
    cafe:['Un caffè e passa tutto. Tranne la voglia di un altro caffè.','One coffee and everything passes. Except the urge for another coffee.','一杯咖啡，烦恼都会过去。除了还想再来一杯的念头。','فنجان قهوة وينتهي كل شيء… إلا الرغبة في فنجان آخر.','Isang kape at lilipas din ang lahat—maliban sa kagustuhang uminom pa ng isa.','Nu cafè e passa tutto. Meno ’a voglia ’e n’ato cafè.'],
    wedding:['Agli sposi auguro amore eterno e una zia che tenga il tempo. Il buffet si arrangia da solo.','Wishing the newlyweds eternal love and an aunt who keeps the beat. The buffet can take care of itself.','祝新人爱情长长久久，也祝有位姑妈负责打拍子。自助餐会照顾好自己。','أتمنى للعروسين حباً أبدياً وخالة تضبط الإيقاع. أما البوفيه فسيدبر أمره.','Hiling ko sa bagong kasal ang walang hanggang pag-ibig at tiyahing marunong sa kumpas. Kaya na ng buffet ang sarili nito.','Agli sposi: ammore eterno e na zia ca tene ’o tiempo. ’O buffet se sape arrangià.'],
    vesuvius:['Il Vesuvio brontola? Sarà che ha sentito la mia nuova canzone e vuole il bis.','Is Vesuvius grumbling? It must have heard my new song and wants an encore.','维苏威在嘟囔吗？一定是听了我的新歌，还想再来一遍。','هل يتذمر فيزوف؟ لا بد أنه سمع أغنيتي الجديدة ويريد إعادة.','Umuungol ba ang Vesuvius? Baka narinig ang bago kong kanta at gusto ng encore.','’O Vesuvio brontola? Avrà sentuto ’a canzona nova e vo’ ’o bis.'],
    generic:['Posso provarci, ma prima devo chiedere il permesso al Vesuvio. Lui risponde a nuvole.','I can try, but first I need Vesuvius’s permission. He answers in clouds.','我可以试试，不过得先问维苏威。它用云朵作答。','يمكنني المحاولة، لكن عليّ أولاً أن أستأذن فيزوف. إنه يجيب بالغيوم.','Susubukan ko, pero kailangan ko munang magpaalam sa Vesuvius. Ulap ang sagot niya.','Ce pozzo pruvà, ma primma adda dimannà ’o permesso ô Vesuvio. Risponne cu ’e nuvole.'],
    serious:['Per le cose serie ci vuole una persona vera accanto. Questa chat è solo un gioco di fantasia.','For serious matters, please reach out to a real person you trust. This chat is only a bit of make-believe.','遇到重要难题，请联系你信任的真人。这只是一个幻想小游戏。','للمسائل الجادة، تواصل مع شخص حقيقي تثق به. هذه الدردشة مجرد لعبة خيالية.','Para sa seryosong bagay, makipag-usap sa taong pinagkakatiwalaan mo. Kathang-isip na laro lang ito.','Pe’ ’e cose serie ce vò na persona vera vicino. Sta chat è sulo nu juoco ’e fantasia.']
  };
  const matchers = {
    serious:/\b(salute|medic|dolor|malatt|soldi|debito|denaro|suicid|emergenz|health|medical|pain|illness|money|debt|suicide|emergency)\b/i,
    music:/canzon|music|song|kanta|musica|音乐|歌曲|موسيقى|أغنية|museca/i,
    love:/amore|love|pag-ibig|pagibig|amour|爱情|الحب|’ammor/i,
    naples:/napoli|naples|napule|那不勒斯|نابولي/i,
    day:/giornata|giorno|storta|rough day|bad day|hard day|不顺|يوم صعب|mahirap na araw|jurnata/i,
    cafe:/caff[eè]|coffee|kape|咖啡|قهوة|cafè|caf[eé]/i,
    wedding:/matrimonio|spos|wedding|married|kasal|婚礼|زواج/i,
    vesuvius:/vesuvio|vesuvius|vulcano|volcano|volcán|維蘇威|维苏威|فيزوف/i
  };
  function language(){return locale[langSelect?.value] ? langSelect.value : 'it';}
  function setLanguage(){
    const l=language(), t=locale[l];
    label.textContent=t.label;input.placeholder=t.placeholder;submit.textContent=t.send;
    topics.forEach((b,i)=>b.textContent=t.topics[i]);
    form.querySelector('#chat-disclaimer').textContent=t.disclaimer;
    if(log.dataset.started!=='yes')log.innerHTML=`<p class="chat-reply"><strong>Tony:</strong> ${t.greet}</p>`;
    if(l==='ar'){form.dir='rtl';log.dir='rtl';}else{form.dir='ltr';log.dir='ltr';}
  }
  function category(text,preferred){
    if(preferred)return preferred;
    const clean=text.toLowerCase();
    if(matchers.serious.test(clean))return 'serious';
    for(const key of ['music','love','naples','day','cafe','wedding','vesuvius'])if(matchers[key].test(clean))return key;
    return 'generic';
  }
  function addMessage(who,text){
    const p=document.createElement('p');p.className='chat-reply';
    const strong=document.createElement('strong');strong.textContent=who+': ';
    p.append(strong,document.createTextNode(text));log.appendChild(p);log.scrollTop=log.scrollHeight;
  }
  function send(text,preferred){
    const clean=text.trim();if(!clean)return;
    const l=language(),t=locale[l];
    if(/(?:[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}|(?:\+?\d[\d ()-]{7,}\d))/.test(clean)){status.textContent=t.private;input.focus();return;}
    status.textContent='';log.dataset.started='yes';addMessage(l==='ar'?'أنت':l==='zh-Hans'?'你':l==='fil'?'Ikaw':l==='en'?'You':l==='nap'?'Tu':'Tu',clean);
    input.value='';submit.disabled=true;status.textContent=t.thinking;
    window.setTimeout(()=>{const key=category(clean,preferred);addMessage(l==='ar'?'Tony':l==='zh-Hans'?'Tony':l==='fil'?'Tony':l==='en'?'Tony':'Tony',answers[key][['it','en','zh-Hans','ar','fil','nap'].indexOf(l)]);submit.disabled=false;status.textContent='';input.focus();},500);
  }
  form.addEventListener('submit',event=>{event.preventDefault();send(input.value);});
  topics.forEach(button=>button.addEventListener('click',()=>send(button.textContent,button.dataset.topic==='musica'?'music':button.dataset.topic==='amore'?'love':button.dataset.topic==='napoli'?'naples':'day')));
  langSelect?.addEventListener('change',setLanguage);
  setLanguage();
})();