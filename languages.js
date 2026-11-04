/* Testi del sito. Titoli delle canzoni e nome dell'artista restano originali. */
(() => {
 'use strict';
 const codes=['it','en','zh-Hans','ar','fil','nap'];
 const rows=[
 ['Tony Vesuvio Fan Club — Tony canta. Napoli risponde.','Tony Vesuvio Fan Club — Tony sings. Naples answers.','Tony Vesuvio 歌迷会 — Tony 歌唱，那不勒斯回应。','نادي محبي Tony Vesuvio — توني يغني ونابولي تجيب.','Tony Vesuvio Fan Club — Umaawit si Tony. Sumasagot ang Naples.','Tony Vesuvio Fan Club — Tony canta. Napule risponne.'],
 ['Da Napoli, con sentimento · Tony Vesuvio Fan Club','From Naples, with feeling · Tony Vesuvio Fan Club','来自那不勒斯，满怀深情 · Tony Vesuvio 歌迷会','من نابولي بكل إحساس · نادي محبي Tony Vesuvio','Mula sa Naples, nang buong puso · Tony Vesuvio Fan Club','’A Napule, cu ’o core · Tony Vesuvio Fan Club'],
 ['La musica · Il cuore · Il fan club','The music · The heart · The fan club','音乐 · 真心 · 歌迷会','الموسيقى · القلب · نادي المحبين','Musika · Puso · Fan club','’A museca · ’O core · ’O fan club'],
 ['Le canzoni','The songs','歌曲','الأغاني','Mga kanta','’E canzone'],
 ['Il fan club','The fan club','歌迷会','نادي المحبين','Ang fan club','’O fan club'],
 ['Dillo a Tony','Tell Tony','对 Tony 说','قلها لتوني','Sabihin kay Tony','Dincello a Tony'],
 ['Il mondo di Tony',"Tony’s world",'Tony 的世界','عالم توني','Mundo ni Tony','’O munno ’e Tony'],
 ['Benvenuti, accomodatevi.','Welcome. Make yourself at home.','欢迎，请随意坐。','أهلاً بكم، تفضلوا.','Maligayang pagdating. Tuloy po kayo.','Trasite, assettateve.'],
 ['Tony canta.','Tony sings.','Tony 歌唱。','توني يغني.','Umaawit si Tony.','Tony canta.'],
 ['Napoli risponde.','Naples answers.','那不勒斯回应。','ونابولي تجيب.','Sumasagot ang Naples.','Napule risponne.'],
 ['Una canzone da dedicare. Un ritornello da cantare insieme. Un pensiero da lasciare a Tony.','A song to dedicate. A chorus to sing together. A thought to share with Tony.','献上一首歌，一起唱一段副歌，给 Tony 留一句心里话。','أغنية تهديها، ولازمة نغنيها معاً، وكلمة تتركها لتوني.','Isang kantang iaalay. Isang koro na sabay aawitin. Isang mensahe para kay Tony.','Na canzona ’a dedicà. Nu riturnello ’a cantà ’nzieme. Nu penziero ’a lassà a Tony.'],
 ["Qui c'è un posto anche per te.","There’s a place for you here, too.",'这里也有属于你的位置。','هنا مكان لك أيضاً.','May lugar ka rin dito.','Ccà ce sta nu posto pure pe tte.'],
 ['Scopri le canzoni','Discover the songs','发现歌曲','اكتشف الأغاني','Tuklasin ang mga kanta','Siente ’e canzone'],
 ['Hai qualcosa da dirgli? Dillo a Tony.','Something on your mind? Tell Tony.','有话想说？对 Tony 说。','لديك ما تقوله؟ قلها لتوني.','May gusto kang sabihin? Sabihin kay Tony.','Tiene quacche cosa ’a dì? Dincello a Tony.'],
 ['Le grandi sere, nel mondo di Tony',"Big nights in Tony’s world",'Tony 世界里的盛大夜晚','ليالٍ كبيرة في عالم توني','Malalaking gabi sa mundo ni Tony','’E serate grosse, dint’ ’o munno ’e Tony'],
 ['Una voce.','One voice.','一个声音。','صوت واحد.','Isang tinig.','Na voce.'],
 ['Mille ritornelli.','A thousand choruses.','千人合唱。','وألف لازمة.','Libo-libong koro.','Mille riturnelle.'],
 ['Le luci si accendono, gli striscioni si alzano. Il resto lo canta il pubblico.','The lights come on, the banners go up. The crowd sings the rest.','灯光亮起，横幅举起，剩下的交给全场合唱。','تُضاء الأنوار وتُرفع اللافتات، والجمهور يغني الباقي.','Bukas ang mga ilaw, taas ang mga bandila. Ang madla na ang kakanta ng kasunod.','S’appicciano ’e luce, s’aizano ’e striscione. ’O riesto ’o canta ’a ggente.'],
 ['Scena immaginaria creata con AI.','Fictional scene created with AI.','AI 创作的虚构场景。','مشهد خيالي مولّد بالذكاء الاصطناعي.','Kathang-isip na eksenang ginawa gamit ang AI.','Scena ’e fantasia fatta cu ll’AI.'],
 ['Metti su il cuore','Put your heart on play','让心随歌声响起','دع قلبك يغني','Patugtugin ang puso','Miette ’o core a sunà'],
 ['Ogni canzone,','Every song,','每一首歌，','كل أغنية،','Bawat kanta,','Ogne canzona,'],
 ['una piccola storia.','a little story.','都是一个小故事。','حكاية صغيرة.','isang munting kuwento.','na piccerella storia.'],
 ["Scegli il tuo ritornello. C'è quello che ti somiglia e quello da dedicare a qualcuno.",'Pick your chorus. One feels like you; another is for someone special.','选一段副歌：有的唱出你的心情，有的适合送给特别的人。','اختر لازمتك: واحدة تشبهك وأخرى تهديها لشخص عزيز.','Piliin ang iyong koro. May kantang parang ikaw, at may kantang maiaalay sa isang tao.','Sceglie ’o riturnello tujo. Ce sta chillo ca t’assumiglia e chillo ’a dedicà a quaccheduno.'],
 ['▶ Ascolta','▶ Listen','▶ 收听','▶ استمع','▶ Pakinggan','▶ Siente'],
 ['La musica sulla tua tazza ↓','Music on your mug ↓','把音乐带上杯子 ↓','الموسيقى على كوبك ↓','Musika sa iyong tasa ↓','’A museca dint’ ’a tazza toja ↓'],
 ['Anteprima: link di ascolto da aggiungere.','Preview: listening link coming soon.','预览：收听链接尚未添加。','معاينة: سيُضاف رابط الاستماع لاحقاً.','Preview: idaragdag pa ang link ng kanta.','Anteprima: ’o cullegamento pe sentì adda arrivà.'],
 ['Quando basta un tavolino. · Scena di fantasia creata con AI.','Sometimes a little table is enough. · Fictional scene created with AI.','有时，一张小桌就够了。· AI 创作的虚构场景。','أحياناً تكفي طاولة صغيرة. · مشهد خيالي مولّد بالذكاء الاصطناعي.','Minsan, sapat na ang isang maliit na mesa. · Kathang-isip na eksenang ginawa gamit ang AI.','Quanno abbasta nu tavulino. · Scena ’e fantasia fatta cu ll’AI.'],
 ['Il palco è vicino.','The stage is close.','舞台很近。','المسرح قريب.','Malapit ang entablado.','’O palco sta vicino.'],
 ['Tu, ancora di più.','You’re even closer.','而你，更近。','وأنت أقرب.','Mas malapit ka pa.','Tu, ancora ’e cchiù.'],
 ['Non servono grandi occasioni. A volte bastano una chitarra, pochi amici e una canzone che nessuno vuole far finire.','No grand occasion needed. Sometimes all it takes is a guitar, a few friends and a song nobody wants to end.','不需要盛大场合。有时，一把吉他、几个朋友和一首谁都舍不得结束的歌就够了。','لا حاجة إلى مناسبة كبيرة. أحياناً يكفي غيتار وبعض الأصدقاء وأغنية لا يريد أحد أن تنتهي.','Hindi kailangan ng engrandeng okasyon. Minsan, sapat na ang gitara, ilang kaibigan at kantang ayaw tapusin ng lahat.','Nun ce vonno ’e grande accasiune. A vote abbastano na chitarra, quatto amice e na canzona ca nisciuno vo’ fernì.'],
 ['Il fan club nasce così: dalla voglia di esserci, ascoltare e cantare insieme.','That’s how the fan club begins: wanting to be there, listen and sing together.','歌迷会就这样诞生了：因为我们想在一起聆听、一起歌唱。','هكذا يبدأ نادي المحبين: برغبة في الحضور والاستماع والغناء معاً.','Dito nagsisimula ang fan club: sa hangaring makasama, makinig at sabay umawit.','’O fan club nasce accussì: cu ’a voglia ’e ce stà, sentì e cantà ’nzieme.'],
 ['Lascia un pensiero a Tony ↗','Leave Tony a message ↗','给 Tony 留言 ↗','اترك كلمة لتوني ↗','Mag-iwan ng mensahe kay Tony ↗','Lassa nu penziero a Tony ↗'],
 ["Il contatto per aderire al club sarà disponibile all'apertura.",'Contact details for joining will be available when the club opens.','歌迷会开放时将公布加入方式。','ستتوفر بيانات الانضمام عند افتتاح النادي.','Ilalabas ang paraan ng pagsali kapag nagbukas ang club.','Pe trasì dint’ ’o club, ’o cuntatto arriva quanno arapimmo.'],
 ['Il microfono, adesso, è tuo','The microphone is yours now','现在，麦克风交给你','الميكروفون لك الآن','Sa iyo na ang mikropono','Mo ’o microfono è ’o tujo'],
 ['Dillo a Tony.','Tell Tony.','对 Tony 说。','قلها لتوني.','Sabihin kay Tony.','Dincello a Tony.'],
 ['Tu fai la domanda.','You ask the question.','你来提问。','أنت تسأل.','Ikaw ang magtanong.','Tu fa’ ’a dimanna.'],
 ['Tony ci mette il Vesuvio.','Tony adds a little Vesuvius.','Tony 加一点维苏威的热情。','وتوني يضيف لمسة من فيزوف.','Si Tony ang bahala sa sigla ng Vesuvius.','Tony ce mette ’o Vesuvio.'],
 ['Come ti chiami nel fan club?',"What’s your fan club nickname?",'你在歌迷会的昵称是什么？','ما لقبك في نادي المحبين؟','Ano ang palayaw mo sa fan club?','Comme te chiamme dint’ ’o fan club?'],
 ['Che cosa vuoi dire a Tony?','What would you like to tell Tony?','你想对 Tony 说什么？','ماذا تريد أن تقول لتوني؟','Ano ang gusto mong sabihin kay Tony?','Che vuò dicere a Tony?'],
 ["Il messaggio e la risposta saranno pubblici dopo un controllo automatico. Non inserire recapiti personali. Le risposte saranno generate dall'AI ispirandosi al personaggio di Tony.",'Your message and the reply will be public after an automated check. Don’t include personal contact details. Replies will be AI-generated, inspired by Tony’s character.','消息和回复将在自动审核后公开。请勿填写个人联系方式。回复由 AI 根据 Tony 的角色风格生成。','ستُنشر الرسالة والإجابة بعد مراجعة آلية. لا تدرج بيانات اتصال شخصية. سيولّد الذكاء الاصطناعي الإجابات بإلهام من شخصية توني.','Ilalathala ang mensahe at sagot matapos ang awtomatikong pagsusuri. Huwag maglagay ng personal na contact details. Gagawa ang AI ng mga sagot na hango sa karakter ni Tony.','’O messaggio e ’a risposta ’e vedarranno tutte doppo nu cuntrollo automatico. Nun mettere ’e cuntatte personale. ’E risposte ’e fa ll’AI, ispirata ô personaggio ’e Tony.'],
 ['Dillo a Tony ↗','Tell Tony ↗','对 Tony 说 ↗','قلها لتوني ↗','Sabihin kay Tony ↗','Dincello a Tony ↗'],
 ['Anteprima: invio, risposte automatiche e bacheca in tempo reale non ancora attivi.','Preview: sending, automated replies and the live message board are not active yet.','预览：发送消息、自动回复和实时留言板尚未启用。','معاينة: الإرسال والإجابات الآلية ولوحة الرسائل المباشرة غير مفعّلة بعد.','Preview: hindi pa aktibo ang pagpapadala, awtomatikong sagot at live message board.','Anteprima: mannà messagge, risposte automatiche e bacheca ’n diretta nun funzionano ancora.'],
 ['Il microfono è tuo.','The microphone is yours.','麦克风交给你。','الميكروفون لك.','Sa iyo ang mikropono.','’O microfono è ’o tujo.'],
 ['Uno scambio di fantasia, per provare il tono','An imaginary exchange to try the tone','一段虚构对话，感受一下风格','حوار خيالي لتجربة الأسلوب','Kathang-isip na usapan para maramdaman ang tono','Na chiacchierata ’e fantasia, pe pruvà ’o tono'],
 ['Un fan chiede:','A fan asks:','歌迷问：','يسأل أحد المحبين:','Tanong ng isang fan:','Nu fan addimanna:'],
 ['«Tony, come si comincia bene il lunedì?»','“Tony, how do you start Monday right?”','“Tony，怎样让星期一有个好开头？”','«توني، كيف نبدأ الاثنين بداية جميلة؟»','“Tony, paano sisimulan nang maganda ang Lunes?”','«Tony, comme se cummincia buono ’o lunnerì?»'],
 ['«Metti una canzone prima della sveglia. Se il lunedì protesta, digli che sta facendo il provino per diventare domenica.»','“Play a song before the alarm. If Monday complains, tell it it’s auditioning to become Sunday.”','“闹钟响之前先放首歌。要是星期一抗议，就告诉它：你正在参加变成星期日的试镜。”','«شغّل أغنية قبل المنبّه. وإذا اعترض الاثنين، قل له إنه يجري تجربة أداء ليصبح الأحد.»','“Magpatugtog bago tumunog ang alarm. Kapag nagreklamo ang Lunes, sabihin mong nag-audition siya para maging Linggo.”','«Miette na canzona primma d’ ’a sveglia. Si ’o lunnerì se lamenta, dincelle ca sta facenno ’o pruvino pe addiventà dummeneca.»'],
 ['Risposta di esempio, non scritta personalmente da Tony. Il tono definitivo sarà costruito su sue battute approvate.','Sample reply, not personally written by Tony. The final voice will be based on his approved lines.','示例回复，并非 Tony 本人撰写。最终风格将根据他认可的表达来确定。','إجابة توضيحية لم يكتبها توني شخصياً. سيُبنى الأسلوب النهائي على عباراته المعتمدة.','Halimbawang sagot, hindi personal na isinulat ni Tony. Ibabatay ang huling tono sa mga linyang inaprubahan niya.','Risposta ’e esempio, nun ll’ha scritta Tony ’e perzona. ’O tono finale se fa cu ’e battute approvate d’ ’e soje.'],
 ['Scene da un mondo possibile. Quasi.','Scenes from a possible world. Almost.','来自一个可能存在的世界。差一点。','مشاهد من عالم ممكن. تقريباً.','Mga eksena sa isang posibleng mundo. Halos.','Scene ’e nu munno pussibbile. Quase.'],
 ['Con Tony,','With Tony,','和 Tony 在一起，','مع توني،','Kasama si Tony,','Cu Tony,'],
 ['può succedere di tutto.','anything can happen.','一切皆有可能。','كل شيء ممكن.','puwedeng mangyari ang lahat.','po’ succedere ’e tutto.'],
 ['La festa si allarga. La zia prende il comando. E da Posillipo arriva una certa telefonata.','The party grows. Auntie takes charge. And a certain call comes in from Posillipo.','派对越来越热闹，阿姨掌控全场，而波西利波打来了一通特别的电话。','تكبر الحفلة، وتتولى الخالة القيادة، وتأتي مكالمة مميزة من بوسيليبو.','Lumalaki ang handaan. Si Tita na ang namumuno. At may tawag mula sa Posillipo.','’A festa s’allarga. ’A zia piglia ’o cummanno. E ’a Pusilleco arriva na certa telefonata.'],
 ['Oggi sposi. Domani afoni.','Married today. Voiceless tomorrow.','今天结婚，明天唱哑。','اليوم عروسان، وغداً بلا صوت.','Kasal ngayon. Paos bukas.','Oje spuse. Dimane senza voce.'],
 ['Si sposa pure il Vesuvio.','Even Vesuvius gets married.','连维苏威也来结婚了。','حتى فيزوف يتزوج.','Pati Vesuvius, ikakasal.','Se sposa pure ’o Vesuvio.'],
 ['La sposa canta, la zia dirige. Tony aveva promesso solo una canzone.','The bride sings, auntie conducts. Tony only promised one song.','新娘唱歌，阿姨指挥。Tony 明明只答应唱一首。','العروس تغني والخالة تقود الفرقة. وتوني كان قد وعد بأغنية واحدة فقط.','Kumakanta ang nobya, si Tita ang konduktor. Isang kanta lang ang ipinangako ni Tony.','’A sposa canta, ’a zia cumanna. Tony aveva prummiso na canzona sulo.'],
 ["L'emozione è tutta d'oro",'An all-gold moment','金光闪耀的感动时刻','لحظة من ذهب','Isang sandaling kasingkinang ng ginto','Ll’emozzione è tutta d’oro'],
 ['Posillipo si alza in piedi.','Posillipo rises to its feet.','波西利波全场起立。','بوسيليبو تصفق وقوفاً.','Tumayo at pumalakpak ang Posillipo.','Pusilleco s’aiza all’impiede.'],
 ["L'Oscar della canzone neomelodica di Posillipo. Tony ringrazia tutti. Anche quelli che erano venuti solo per il buffet.",'The Posillipo Oscar for Neomelodic Song. Tony thanks everyone. Even those who only came for the buffet.','波西利波新旋律歌曲奥斯卡奖。Tony 感谢所有人，包括那些只为自助餐而来的人。','أوسكار الأغنية النيوميلودية في بوسيليبو. توني يشكر الجميع، حتى من جاءوا من أجل البوفيه فقط.','Ang Posillipo Oscar para sa Neomelodic Song. Nagpapasalamat si Tony sa lahat. Kahit sa mga pumunta lang para sa buffet.','Ll’Oscar d’ ’a canzona neomelodica ’e Pusilleco. Tony ringrazzia a tutte. Pure a chille ca erano venute sulo p’ ’o buffet.'],
 ['Scene di fantasia create con AI per raccontare il mondo surreale di Tony Vesuvio.','Fictional scenes created with AI to tell the story of Tony Vesuvio’s surreal world.','AI 创作的虚构场景，展现 Tony Vesuvio 的超现实世界。','مشاهد خيالية مولّدة بالذكاء الاصطناعي لتصوير عالم توني فيزوفيو السريالي.','Mga kathang-isip na eksenang ginawa gamit ang AI upang ilarawan ang surreal na mundo ni Tony Vesuvio.','Scene ’e fantasia fatte cu ll’AI pe cuntà ’o munno surreale ’e Tony Vesuvio.'],
 ['Prima di andare, un caffè?','Before you go, a coffee?','走之前，喝杯咖啡？','قبل أن تذهب، قهوة؟','Bago umalis, kape muna?','Primma ’e te ne jì, nu cafè?'],
 ['Regala un sorso','Give a sip','送一口','أهدِ رشفة','Magregalo ng isang higop','Regala nu surzo'],
 ['di Napoli.','of Naples.','那不勒斯。','من نابولي.','ng Naples.','’e Napule.'],
 ['Fai colazione con Tony Vesuvio. Una tazza, una canzone, un pensiero per qualcuno: inquadra il QR code e lascia partire la musica.','Have breakfast with Tony Vesuvio. A mug, a song, a thought for someone: scan the QR code and let the music play.','与 Tony Vesuvio 共进早餐。一只杯子、一首歌、一份心意：扫描二维码，让音乐响起。','تناول فطورك مع توني فيزوفيو. كوب وأغنية وهدية لشخص عزيز: امسح رمز QR ودع الموسيقى تبدأ.','Mag-almusal kasama si Tony Vesuvio. Isang tasa, isang kanta, isang alay: i-scan ang QR code at patugtugin ang musika.','Fa’ culazzione cu Tony Vesuvio. Na tazza, na canzona, nu penziero pe quaccheduno: ’nquadra ’o QR code e fa’ partì ’a museca.'],
 ['Il caffè lo metti tu.','You bring the coffee.','咖啡你来准备。','القهوة عليك.','Ikaw ang bahala sa kape.','’O cafè ’o miette tu.'],
 ['Alla serenata pensa Tony.','Tony brings the serenade.','小夜曲交给 Tony。','والسهرة الغنائية على توني.','Si Tony ang bahala sa harana.','Â serenata ce penza Tony.'],
 ['Da quale canzone cominciamo? ↑','Which song shall we start with? ↑','从哪首歌开始？↑','بأي أغنية نبدأ؟ ↑','Anong kanta ang uunahin natin? ↑','’A quale canzona accumminciammo? ↑'],
 ['Una tazza.','A mug.','一只杯子。','كوب.','Isang tasa.','Na tazza.'],
 ['Una canzone.','A song.','一首歌。','أغنية.','Isang kanta.','Na canzona.'],
 ['Un sorriso.','A smile.','一个微笑。','ابتسامة.','Isang ngiti.','Nu surriso.'],
 ['Inquadra il QR code.','Scan the QR code.','扫描二维码。','امسح رمز QR.','I-scan ang QR code.','’Nquadra ’o QR code.'],
 ['Apri il link. Ascolta Tony.','Open the link. Listen to Tony.','打开链接，聆听 Tony。','افتح الرابط واستمع إلى توني.','Buksan ang link. Pakinggan si Tony.','Arape ’o link. Siente a Tony.'],
 ['Fan Club · Da Napoli, con sentimento.','Fan Club · From Naples, with feeling.','歌迷会 · 来自那不勒斯，满怀深情。','نادي المحبين · من نابولي بكل إحساس.','Fan Club · Mula sa Naples, nang buong puso.','Fan Club · ’A Napule, cu ’o core.'],
 ['Bozza del sito · Shop non ancora attivo.','Website draft · Merchandise not on sale yet.','网站草稿 · 商品尚未开售。','نسخة أولية للموقع · المنتجات غير متاحة للبيع بعد.','Draft ng website · Hindi pa ibinebenta ang merchandise.','Bozza d’ ’o sito · ’E gadget nun se venneno ancora.'],
 ['Torna su ↑','Back to top ↑','返回顶部 ↑','العودة للأعلى ↑','Bumalik sa itaas ↑','Torna ’ncoppa ↑'],
 ['Lingua','Language','语言','اللغة','Wika','Lengua'],
 ['Il tuo soprannome','Your nickname','你的昵称','لقبك','Palayaw mo','’O nommignolo tujo'],
 ['Una domanda, una dedica, un pensiero…','A question, a dedication, a thought…','一个问题、一句献词、一段心里话……','سؤال، إهداء، خاطرة…','Isang tanong, alay, o saloobin…','Na dimanna, na dedica, nu penziero…'],
 ['Navigazione principale','Main navigation','主导航','التنقل الرئيسي','Pangunahing nabigasyon','Navigazzione principale'],
 ['Tony Vesuvio Fan Club, inizio pagina','Tony Vesuvio Fan Club, top of page','Tony Vesuvio 歌迷会，返回顶部','نادي محبي توني، بداية الصفحة','Tony Vesuvio Fan Club, simula ng pahina','Tony Vesuvio Fan Club, ’ncoppa â paggena'],
 ['Come funzionano le tazze musicali','How the musical mugs work','音乐杯使用方法','كيف تعمل الأكواب الموسيقية','Paano gumagana ang mga tasang may musika','Comme funzionano ’e tazze cu ’a museca'],
 ['Ti sono rimasti in testa?','Still humming along?','旋律还在脑海里回响吗？','ما زالت الأغنية تدور في ذهنك؟','Napapakanta ka pa rin ba?','T’ ’è rimasto ’o riturnello ’ncapa?'],
 ['Iscriviti al canale YouTube di Tony Vesuvio','Subscribe to Tony Vesuvio’s YouTube channel','订阅 Tony Vesuvio 的 YouTube 频道','اشترك في قناة Tony Vesuvio على YouTube','Mag-subscribe sa YouTube channel ni Tony Vesuvio','Abbonate ’o canale YouTube ’e Tony Vesuvio'],
 ['e canta con noi.','and sing along with us.','和我们一起唱吧。','وغنِّ معنا.','at kumanta kasama namin.','e canta cu nuje.'],
 ['Il pulsante apre la ricerca YouTube: aggiungeremo il link diretto appena confermato il canale ufficiale.','This button opens a YouTube search. We’ll add a direct link once the official channel is confirmed.','此按钮会打开 YouTube 搜索。确认官方频道后，我们会添加直达链接。','يفتح هذا الزر بحث YouTube. سنضيف الرابط المباشر بعد تأكيد القناة الرسمية.','Bubuksan ng button ang paghahanap sa YouTube. Idadagdag ang direktang link kapag nakumpirma ang opisyal na channel.','’O buttone apre ’a ricerca YouTube: mettimm ’o link diretto quanno cunfermamm ’o canale ufficiale.'],
 ['Seguici sui social','Follow us on social media','关注我们的社交媒体','تابعنا على وسائل التواصل الاجتماعي','Sundan kami sa social media','Seguìtence ’ncopp’ ’e social'],
 ['I link ufficiali di Instagram, Facebook, TikTok e YouTube saranno aggiunti qui.','Official Instagram, Facebook, TikTok and YouTube links will appear here.','Instagram、Facebook、TikTok 和 YouTube 官方链接将在此处添加。','ستُضاف هنا الروابط الرسمية لـ Instagram وFacebook وTikTok وYouTube.','Ilalagay rito ang mga opisyal na link ng Instagram, Facebook, TikTok at YouTube.','’E link ufficiale ’e Instagram, Facebook, TikTok e YouTube ’e mettimmo ccà.']
 ];
 const dictionary=new Map(rows.map(row=>[row[0],row]));
 const select=document.querySelector('#site-language');
 const textNodes=[];
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 while(walker.nextNode()){
  const node=walker.currentNode;
  if(node.parentElement.closest('script,style,select'))continue;
  const key=node.nodeValue.trim();
  if(dictionary.has(key))textNodes.push({node,key,original:node.nodeValue});
 }
 const attributeNodes=[];
 for(const element of document.querySelectorAll('[placeholder],[aria-label]')){
  for(const attribute of ['placeholder','aria-label']){
   const key=element.getAttribute(attribute);
   if(dictionary.has(key))attributeNodes.push({element,attribute,key});
  }
 }
 const originalTitle=document.title;
 const imageDescriptions={
  'logo-ufficiale-tony-vesuvio.png':['Tony Vesuvio official logo','Tony Vesuvio 官方标志','الشعار الرسمي لتوني فيزوفيو','Opisyal na logo ni Tony Vesuvio','’O logo ufficiale ’e Tony Vesuvio'],
  'Tony-Vesuvio-banner-esteso-RGB.png':['Tony Vesuvio in front of the Bay of Naples at sunset','日落时那不勒斯湾前的 Tony Vesuvio','توني فيزوفيو أمام خليج نابولي عند الغروب','Tony Vesuvio sa harap ng Bay of Naples sa paglubog ng araw','Tony Vesuvio ’nnanze ô Golfo ’e Napule ô tramonto'],
  'tony-arena.png':['Fictional scene: Tony sings in a packed arena with fans holding banners','虚构场景：Tony 在挤满举着横幅的歌迷的竞技场演唱','مشهد خيالي: توني يغني في ساحة مزدحمة بالمحبين واللافتات','Kathang-isip: umaawit si Tony sa arenang puno ng mga fan na may bandila','Scena ’e fantasia: Tony canta dint’ a n’arena chiena ’e fan cu ’e striscione'],
  'tony-pub.png':['Fictional scene: Tony sings with a guitarist in a small venue','虚构场景：Tony 与吉他手在小酒馆演唱','مشهد خيالي: توني يغني مع عازف غيتار في مكان صغير','Kathang-isip: umaawit si Tony kasama ang gitarista sa maliit na lugar','Scena ’e fantasia: Tony canta cu nu chitarrista dint’ a nu lucale piccerillo'],
  'tony-matrimonio.png':['Fictional wedding: Tony sings with the newlyweds and a Vesuvius-shaped cake arrives','虚构婚礼：Tony 与新人合唱，侍者端来维苏威形状的蛋糕','زفاف خيالي: توني يغني مع العروسين وتصل كعكة على شكل فيزوف','Kathang-isip na kasal: kumakanta si Tony kasama ang bagong kasal at may keyk na hugis Vesuvius','Matrimonio ’e fantasia: Tony canta cu ’e spuse e arriva na torta a Vesuvio'],
  'tony-premio-posillipo.png':['Fictional award ceremony: Tony receives the Posillipo Oscar for Neomelodic Song','虚构颁奖礼：Tony 获得波西利波新旋律歌曲奥斯卡奖','حفل خيالي: توني يتسلم أوسكار الأغنية النيوميلودية في بوسيليبو','Kathang-isip na parangal: tinatanggap ni Tony ang Posillipo Oscar para sa Neomelodic Song','Premiazzione ’e fantasia: Tony piglia ll’Oscar d’ ’a canzona neomelodica ’e Pusilleco'],
  'tony-ritratto-ufficiale.png':['Tony Vesuvio invites you to speak, with his hand outstretched','Tony Vesuvio 伸手邀请你说出心里话','توني فيزوفيو يمد يده ويدعوك للكلام','Inaanyayahan ka ni Tony Vesuvio na magsalita habang nakalahad ang kamay','Tony Vesuvio te fa cenno ’e parlà cu ’a mano stesa']
 };
 const images=[...document.querySelectorAll('img')].map(element=>({element,original:element.alt,key:element.getAttribute('src').split('/').pop()}));
 const titles=rows[0];
 const descriptions=[
  'Tony Vesuvio Fan Club. Le canzoni, i vostri messaggi e un mondo tutto da cantare. Da Napoli, con sentimento.',
  'Tony Vesuvio Fan Club. Songs, your messages and a world to sing together. From Naples, with feeling.',
  'Tony Vesuvio 歌迷会。歌曲、你的留言，还有一个值得一起歌唱的世界。来自那不勒斯，满怀深情。',
  'نادي محبي توني فيزوفيو. الأغاني ورسائلكم وعالم نغنيه معاً. من نابولي بكل إحساس.',
  'Tony Vesuvio Fan Club. Mga kanta, mensahe ninyo at mundong sabay aawitin. Mula sa Naples, nang buong puso.',
  'Tony Vesuvio Fan Club. ’E canzone, ’e messagge vuoste e nu munno ’a cantà ’nzieme. ’A Napule, cu ’o core.'
 ];
 function changeLanguage(code){
  const index=codes.indexOf(code);
  if(index<0)return;
  document.documentElement.lang=code;
  document.documentElement.dir=code==='ar'?'rtl':'ltr';
  for(const {node,key,original} of textNodes){node.nodeValue=original.replace(key,()=>dictionary.get(key)[index]);}
  for(const {element,attribute,key} of attributeNodes){element.setAttribute(attribute,dictionary.get(key)[index]);}
  for(const {element,original,key} of images){
   if(index===0){element.alt=original;continue;}
   if(imageDescriptions[key])element.alt=imageDescriptions[key][index-1];
   else if(key.startsWith('cd-')){
    const title=element.closest('.record').querySelector('h3').textContent;
    element.alt=['CD case mockup: ','CD 包装效果图：','تصور لغلاف قرص: ','Mockup ng CD case: ','Custodia d’ ’o CD: '][index-1]+title;
   }
  }
  document.title=titles[index]||originalTitle;
  document.querySelector('meta[name="description"]').content=descriptions[index];
  select.value=code;
  try{localStorage.setItem('tony-site-language',code);}catch{/* Preferenza solo per questa visita. */}
 }
 select.addEventListener('change',event=>changeLanguage(event.target.value));
 let saved='it';try{saved=localStorage.getItem('tony-site-language')||'it';}catch{}
 changeLanguage(codes.includes(saved)?saved:'it');
})();
