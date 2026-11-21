window.Effects = (()=>{
  const stars=Array.from({length:110},()=>({x:Math.random(),y:Math.random(),r:.3+Math.random()*1.5,a:.25+Math.random()*.7,s:.1+Math.random()*.4}));
  function night(ctx,w,h,t){const g=ctx.createLinearGradient(0,0,0,h);g.addColorStop(0,'#07111f');g.addColorStop(.58,'#122748');g.addColorStop(1,'#0a1423');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);for(const s of stars){ctx.globalAlpha=s.a*(.7+.3*Math.sin(t*.001*s.s+s.x*20));ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(s.x*w,s.y*h,s.r,0,Math.PI*2);ctx.fill()}ctx.globalAlpha=1}
  function glow(ctx,x,y,r,c){const g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,c);g.addColorStop(1,'transparent');ctx.fillStyle=g;ctx.fillRect(x-r,y-r,r*2,r*2)}
  function vignette(ctx,w,h){const g=ctx.createRadialGradient(w/2,h/2,Math.min(w,h)*.2,w/2,h/2,Math.max(w,h)*.72);g.addColorStop(.5,'transparent');g.addColorStop(1,'rgba(0,0,0,.55)');ctx.fillStyle=g;ctx.fillRect(0,0,w,h)}
  function grain(ctx,w,h,t){ctx.save();ctx.globalAlpha=.04;ctx.fillStyle='#fff';for(let i=0;i<60;i++){const x=(Math.sin(i*12.3+t*.002)*.5+.5)*w,y=(Math.cos(i*7.7+t*.0017)*.5+.5)*h;ctx.fillRect(x,y,1,1)}ctx.restore()}
  return {night,glow,vignette,grain};
})();
