// nothing
let toggle = document.querySelector('.toggle')
toggle.onclick = (e) => {
    let classes = document.querySelector('.wrapper').classList

    if(classes.contains('collapsed'))
        classes.remove('collapsed')
    else
        classes.add('collapsed')
}

// this is my personal analytics and it's fully anonymous.
var _paq = window._paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
    var u="//log.duiker101.net/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '2']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();
