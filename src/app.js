const tiktokWrappers = document.querySelectorAll('.tiktok-wrapper');
const embedCode = '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@traveloregon/video/7252078322774002986" data-video-id="7252078322774002986" data-embed-from="oembed" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@traveloregon" href="https://www.tiktok.com/@traveloregon?refer=embed">@traveloregon</a> <p>Stay cool, PDX 🍧 <a title="icecream" target="_blank" href="https://www.tiktok.com/tag/icecream?refer=embed">#icecream</a> <a title="portland" target="_blank" href="https://www.tiktok.com/tag/portland?refer=embed">#portland</a> <a title="portlandicecream" target="_blank" href="https://www.tiktok.com/tag/portlandicecream?refer=embed">#portlandicecream</a> </p> <a target="_blank" title="♬ cupid twin version - ⟡ TRACYTRACKS ⟡" href="https://www.tiktok.com/music/cupid-twin-version-7204756346426755886?refer=embed">♬ cupid twin version - ⟡ TRACYTRACKS ⟡</a> </section> </blockquote>'
const embedCodes = [
  '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@traveloregon/video/7252078322774002986" data-video-id="7252078322774002986" data-embed-from="oembed" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@traveloregon" href="https://www.tiktok.com/@traveloregon?refer=embed">@traveloregon</a> <p>Stay cool, PDX 🍧 <a title="icecream" target="_blank" href="https://www.tiktok.com/tag/icecream?refer=embed">#icecream</a> <a title="portland" target="_blank" href="https://www.tiktok.com/tag/portland?refer=embed">#portland</a> <a title="portlandicecream" target="_blank" href="https://www.tiktok.com/tag/portlandicecream?refer=embed">#portlandicecream</a> </p> <a target="_blank" title="♬ cupid twin version - ⟡ TRACYTRACKS ⟡" href="https://www.tiktok.com/music/cupid-twin-version-7204756346426755886?refer=embed">♬ cupid twin version - ⟡ TRACYTRACKS ⟡</a> </section> </blockquote>',
  '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@scout2015/video/6718335390845095173" data-video-id="6718335390845095173" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@scout2015" href="https://www.tiktok.com/@scout2015?refer=embed">@scout2015</a> Scramble up ur name &#38; I’ll try to guess it😍❤️ <a title="foryoupage" target="_blank" href="https://www.tiktok.com/tag/foryoupage?refer=embed">#foryoupage</a> <a title="petsoftiktok" target="_blank" href="https://www.tiktok.com/tag/petsoftiktok?refer=embed">#petsoftiktok</a> <a title="aesthetic" target="_blank" href="https://www.tiktok.com/tag/aesthetic?refer=embed">#aesthetic</a> <a target="_blank" title="♬ original sound - tiff" href="https://www.tiktok.com/music/original-sound-6689804660171082501?refer=embed">♬ original sound - tiff</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',  
];
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
  const tiktokEmbeds = document.querySelectorAll('.tiktok-embed');
  tiktokEmbeds.forEach(function(tiktokEmbed) {
    tiktokEmbed.remove();
  });
  
  const tiktokScripts = document.querySelectorAll('script[src*="tiktok"]');
  tiktokScripts.forEach(function(script) {
    script.remove();
  });
}

function addTikTok() {
  embedCodes.forEach((embedCode, key) => {
    tiktokWrappers[key].innerHTML = embedCode;
  });
  addScript();
}

function addScript() {
  var tiktokScript = document.createElement('script');
  tiktokScript.setAttribute('src','https://www.tiktok.com/embed.js');
  tiktokScript.setAttribute('async','');
  document.head.appendChild(tiktokScript);
}