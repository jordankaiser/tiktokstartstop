const tiktokWrapper = document.querySelector('.tiktok-wrapper');
const embedCode = '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@traveloregon/video/7252078322774002986" data-video-id="7252078322774002986" data-embed-from="oembed" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@traveloregon" href="https://www.tiktok.com/@traveloregon?refer=embed">@traveloregon</a> <p>Stay cool, PDX 🍧 <a title="icecream" target="_blank" href="https://www.tiktok.com/tag/icecream?refer=embed">#icecream</a> <a title="portland" target="_blank" href="https://www.tiktok.com/tag/portland?refer=embed">#portland</a> <a title="portlandicecream" target="_blank" href="https://www.tiktok.com/tag/portlandicecream?refer=embed">#portlandicecream</a> </p> <a target="_blank" title="♬ cupid twin version - ⟡ TRACYTRACKS ⟡" href="https://www.tiktok.com/music/cupid-twin-version-7204756346426755886?refer=embed">♬ cupid twin version - ⟡ TRACYTRACKS ⟡</a> </section> </blockquote>'
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

function test1() {
  
  stop.addEventListener('click', function() {
    console.log('stoping');
    removeTikTok();
  });
  start.addEventListener('click', function() {
    console.log('starting');
    addTikTok();
  });
}
test1();

function removeTikTok() {
  const tiktokEmbed = document.querySelector('.tiktok-embed');
  tiktokEmbed.remove();
  
  const tiktokScripts = document.querySelectorAll('script[src*="tiktok"]');
  tiktokScripts.forEach(function(script) {
    script.remove();
  });
}

function addTikTok() {
  tiktokWrapper.innerHTML = embedCode;
  addScript();
}

function addScript() {
  var tiktokScript = document.createElement('script');
  tiktokScript.setAttribute('src','https://www.tiktok.com/embed.js');
  tiktokScript.setAttribute('async','');
  document.head.appendChild(tiktokScript);
}