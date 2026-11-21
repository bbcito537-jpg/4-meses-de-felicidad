window.SceneEngine = (()=>{
  const canvas=document.getElementById('world'),ctx=canvas.getContext('2d');let w=0,h=0,dpr=1,start=0,playing=false,raf;
  function resize(){dpr=Math.min(devicePixelRatio||1,2);w=innerWidth;h=innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0)}
  function frame(now){if(!playing)return;const elapsed=now-start;const data=window.STORY_DATA;let idx=data.chapters.length-1;for(let i=0;i<data.chapters.length;i++){if(elapsed<data.chapters[i].t){idx=Math.max(0,i-1);break}}const c=data.chapters[idx],next=data.chapters[idx+1];const local=elapsed-c.t;const span=(next?next.t:data.duration)-c.t;Scenes.draw(c.scene,ctx,w,h,local,span);document.getElementById('chapter').textContent=c.title;document.getElementById('caption').textContent=c.text;document.getElementById('progressBar').style.width=Math.min(100,elapsed/data.duration*100)+'%';if(elapsed>=data.duration){stop();App.afterStory();return}raf=requestAnimationFrame(frame)}
  function play(){start=performance.now();playing=true;raf=requestAnimationFrame(frame)}
  function stop(){playing=false;cancelAnimationFrame(raf)}
  addEventListener('resize',resize);resize();
  return {play,stop,canvas,ctx,get size(){return {w,h}}};
})();
