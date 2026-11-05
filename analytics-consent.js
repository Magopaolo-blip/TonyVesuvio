/* Tony Vesuvio - analytics opt-in. No Google requests before consent. */
(function () {
  'use strict';
  var KEY = 'tony_analytics_consent_v1';
  var MEASUREMENT_ID = 'G-7HQ19KKPPL';
  function getChoice() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function saveChoice(value) { try { localStorage.setItem(KEY, value); } catch (e) {} }
  function enableAnalytics() {
    if (window.__tonyAnalyticsLoaded) return;
    window.__tonyAnalyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', MEASUREMENT_ID);
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(MEASUREMENT_ID);
    document.head.appendChild(script);
  }
  function showBanner() {
    if (document.getElementById('tony-cookie-banner')) return;
    var style = document.createElement('style');
    style.textContent = '#tony-cookie-banner{position:fixed;bottom:16px;left:16px;right:16px;z-index:2147483646;max-width:760px;margin:auto;padding:18px 20px;background:#171b26;color:#fff;border:1px solid #d4ae59;border-radius:12px;box-shadow:0 6px 32px #0009;font:15px/1.5 system-ui,sans-serif}#tony-cookie-banner p{margin:5px 0 12px}#tony-cookie-banner button,#tony-cookie-settings{font:inherit;cursor:pointer}#tony-cookie-banner .tony-actions{display:flex;gap:9px;flex-wrap:wrap}#tony-cookie-banner button{padding:8px 15px;border-radius:6px;border:1px solid #d4ae59;background:#d4ae59;color:#171b26;font-weight:600}#tony-cookie-banner button[data-choice="no"]{background:transparent;color:#fff}#tony-cookie-settings{position:fixed;bottom:12px;left:12px;z-index:2147483645;border:1px solid #a48b55;border-radius:8px;background:#171b26;color:white;padding:7px 11px;font-size:12px;opacity:.9}';
    document.head.appendChild(style);
    var banner = document.createElement('section');
    banner.id = 'tony-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Preferenze cookie statistici');
    banner.innerHTML = '<strong>Cookie e statistiche</strong><p>Utilizziamo Google Analytics solo con il tuo consenso per capire come viene visitato il sito. Puoi rifiutare senza limitazioni e modificare la scelta in qualsiasi momento. <a href="/informativa-cookie/" style="color:#f6d486">Informativa cookie</a>.</p><div class="tony-actions"><button type="button" data-choice="no">Rifiuta statistiche</button><button type="button" data-choice="yes">Accetta statistiche</button></div>';
    banner.addEventListener('click', function (e) {
      var button = e.target.closest('button[data-choice]');
      if (!button) return;
      var choice = button.getAttribute('data-choice');
      saveChoice(choice);
      banner.remove();
      if (choice === 'yes') enableAnalytics();
    });
    document.body.appendChild(banner);
  }
  function init() {
    var settings = document.createElement('button');
    settings.type = 'button';
    settings.id = 'tony-cookie-settings';
    settings.textContent = 'Preferenze cookie';
    settings.setAttribute('aria-label', 'Modifica preferenze cookie statistici');
    settings.addEventListener('click', showBanner);
    document.body.appendChild(settings);
    var choice = getChoice();
    if (choice === 'yes') enableAnalytics();
    else if (choice !== 'no') showBanner();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
