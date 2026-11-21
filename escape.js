window.EscapeGame=(()=>{
 const canvas=document.getElementById('escapeCanvas'),ctx=canvas.getContext('2d'),hud=document.getElementById('escapeHUD'),inv=document.getElementById('inventory');let w,h,dpr,room=0,items=new Set(),message='Encuentra una forma de abrir la puerta.',raf,t0=0;
 const hotspots=[];
 function resize(){const r=canvas.getBoundingClientRect();dpr=Math.min(devicePixelRatio||1,2);w=r.width;h=r.height;canvas.width=w*dpr;canvas.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}
 function addHot(x,y,r,id){hotspots.push({x,y,r,id})}
 function draw(t){hotspots.length=0;ctx.fillStyle='#0d1728';ctx.fillRect(0,0,w,h);const g=ctx.createLinearGradient(0,0,0,h);g.addColorStop(0,'rgba(39,73,114,.45)');g.addColorStop(1,'rgba(0,0,0,.2)');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);ctx.fillStyle='#1c2940';ctx.fillRect(0,h*.72,w,h*.28);ctx.fillStyle='#253752';ctx.fillRect(w*.08,h*.12,w*.84,h*.55);ctx.strokeStyle='#3c577f';ctx.strokeRect(w*.08,h*.12,w*.84,h*.55);
 if(room===0){door(w*.68,h*.2,w*.16,h*.42);desk(w*.12,h*.5);poster(w*.17,h*.19,'12:26');Characters.tzuyu(ctx,w*.35,h*.63,.62,t*.004);addHot(w*.23,h*.56,42,'drawer');addHot(w*.21,h*.26,40,'poster');addHot(w*.35,h*.62,45,'cat');addHot(w*.76,h*.42,50,'door')}
 if(room===1){door(w*.72,h*.19,w*.16,h*.43);ctx.fillStyle='#212f46';ctx.fillRect(w*.14,h*.25,w*.37,h*.2);ctx.fillStyle='#89a8d2';ctx.font='700 16px system-ui';ctx.fillText('PARCHÍS',w*.22,h*.34);phone(w*.32,h*.59,.7);Characters.tzuyu(ctx,w*.58,h*.62,.55,t*.004);addHot(w*.33,h*.59,52,'phone');addHot(w*.58,h*.62,48,'cat2');addHot(w*.8,h*.42,52,'door2')}
 if(room===2){door(w*.7,h*.2,w*.17,h*.42);ctx.fillStyle='#d6c39f';ctx.beginPath();ctx.ellipse(w*.34,h*.55,w*.18,30,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#6f5036';ctx.fillRect(w*.18,h*.26,w*.32,h*.16);for(let i=0;i<4;i++){ctx.fillStyle='#cdb78e';ctx.fillRect(w*.2+i*34,h*.28,26,62)}Characters.tzuyu(ctx,w*.52,h*.63,.55,t*.004);addHot(w*.34,h*.54,54,'table');addHot(w*.52,h*.63,48,'cat3');addHot(w*.78,h*.42,52,'door3')}
 Effects.vignette(ctx,w,h);hud.textContent=message;raf=requestAnimationFrame(draw)}
 function door(x,y,ww,hh){ctx.fillStyle='#101925';ctx.fillRect(x,y,ww,hh);ctx.strokeStyle='#6e89a8';ctx.strokeRect(x,y,ww,hh);ctx.fillStyle='#d8b667';ctx.beginPath();ctx.arc(x+ww*.8,y+hh*.52,5,0,Math.PI*2);ctx.fill()}
 function desk(x,y){ctx.fillStyle='#79563c';ctx.fillRect(x,y,w*.32,16);ctx.fillRect(x+12,y,w*.035,h*.18);ctx.fillRect(x+w*.26,y,w*.035,h*.18);ctx.fillStyle='#9b714d';ctx.fillRect(x+18,y+20,w*.16,38)}
 function poster(x,y,text){ctx.fillStyle='#e5d7b8';ctx.fillRect(x,y,w*.2,h*.13);ctx.fillStyle='#3d3025';ctx.font='700 20px Georgia';ctx.fillText(text,x+14,y+35)}
 function phone(x,y,s){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle='#111a28';ctx.beginPath();ctx.roundRect(-34,-60,68,120,12);ctx.fill();ctx.strokeStyle='#7890ae';ctx.stroke();ctx.fillStyle='#89b7e7';ctx.beginPath();ctx.arc(0,-10,16,0,Math.PI*2);ctx.fill();ctx.restore()}
 function click(e){const r=canvas.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;let pick=null,b=999;for(const h0 of hotspots){const d=Math.hypot(x-h0.x,y-h0.y);if(d<h0.r&&d<b){pick=h0;b=d}}if(!pick)return;act(pick.id)}
 function act(id){if(id==='drawer'){items.add('llave');message='Encontraste una llave pequeña. Tiene grabado “07”.'}
 else if(id==='poster'){message='12:26. Una hora que no está aquí por casualidad.'}
 else if(id==='cat'){message='Tzuyu parece saber algo. Mira la puerta… y luego la llave.'}
 else if(id==='door'){if(items.has('llave')){room=1;message='La llave encajó. Habitación 02: encuentra el código.'}else message='Cerrada. Tzuyu no piensa ayudarte gratis.'}
 else if(id==='phone'){items.add('codigo');message='En la pantalla: 22 · 07. Parece más fecha que contraseña.'}
 else if(id==='cat2'){message='Tzuyu empuja una ficha invisible con la pata. Muy sutil.'}
 else if(id==='door2'){if(items.has('codigo')){room=2;message='22-07 funcionó. Última habitación.'}else message='Necesitas cuatro números.'}
 else if(id==='table'){items.add('memoria');message='Una mesa redonda. Biblioteca. Primera videollamada. La puerta hace clic.'}
 else if(id==='cat3'){message='Tzuyu se sienta junto a la salida como si todo hubiese sido idea suya.'}
 else if(id==='door3'){if(items.has('memoria'))finish();else message='La cerradura tiene un símbolo circular. ¿Qué recuerdo falta?'}renderInv();document.getElementById('roomStatus').textContent='Habitación 0'+(room+1)}
 function renderInv(){inv.innerHTML=[...items].map(x=>`<span class="inv">${x==='llave'?'Llave 07':x==='codigo'?'Código 22·07':'Recuerdo Hinkley'}</span>`).join('')}
 function start(){resize();addEventListener('resize',resize);canvas.addEventListener('pointerdown',click);renderInv();raf=requestAnimationFrame(draw)}
 function stop(){cancelAnimationFrame(raf)}
 function finish(){stop();document.getElementById('escape').classList.add('hidden');document.getElementById('finale').classList.remove('hidden');Finale.start()}
 return {start,stop};
})();
