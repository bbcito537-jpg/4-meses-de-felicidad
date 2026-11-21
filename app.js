window.App=(()=>{
 const $=id=>document.getElementById(id),overlay=$('overlay'),storyUI=$('storyUI'),letter=$('letter'),memory=$('memory'),escape=$('escape');
 function start(){overlay.classList.add('hidden');storyUI.classList.remove('hidden');Music.start();SceneEngine.play()}
 function afterStory(){storyUI.classList.add('hidden');letter.classList.remove('hidden')}
 $('startBtn').addEventListener('click',start);
 $('soundBtn').addEventListener('click',async()=>{if(Music.isOn()){Music.stop();$('soundBtn').textContent='♫ Música';$('soundBtn').setAttribute('aria-pressed','false')}else{await Music.start();$('soundBtn').textContent='♫ Sonando';$('soundBtn').setAttribute('aria-pressed','true')}});
 $('skipBtn').addEventListener('click',()=>{SceneEngine.stop();afterStory()});
 $('letterNext').addEventListener('click',()=>{letter.classList.add('hidden');memory.classList.remove('hidden');Memories.start()});
 $('memoryNext').addEventListener('click',()=>{Memories.stop();memory.classList.add('hidden');escape.classList.remove('hidden');EscapeGame.start()});
 // ambient opening canvas before start
 const c=SceneEngine.canvas,ctx=SceneEngine.ctx;let raf;function idle(t){if(overlay.classList.contains('hidden'))return;const {w,h}=SceneEngine.size;Effects.night(ctx,w,h,t);Characters.angelo(ctx,w*.38,h*.62,.76,t*.003);Characters.bella(ctx,w*.62,h*.62,.76,t*.003,true);Characters.tzuyu(ctx,w*.5,h*.7,.44,t*.004);Effects.glow(ctx,w*.5,h*.53,220,'rgba(243,201,122,.08)');Effects.vignette(ctx,w,h);raf=requestAnimationFrame(idle)}raf=requestAnimationFrame(idle);
 return {afterStory};
})();
