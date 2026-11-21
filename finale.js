window.Finale=(()=>{
 function start(){const el=document.getElementById('finaleArt');el.innerHTML='';for(let i=0;i<18;i++){const s=document.createElement('i');s.style.cssText=`position:absolute;left:${8+Math.random()*84}%;top:${15+Math.random()*70}%;width:${4+Math.random()*7}px;height:${4+Math.random()*7}px;border-radius:50%;background:${i%2?'#f3c97a':'#ffb5d7'};box-shadow:0 0 20px currentColor;animation:float ${3+Math.random()*3}s ease-in-out infinite alternate;`;el.appendChild(s)}if(!document.getElementById('floatStyle')){const st=document.createElement('style');st.id='floatStyle';st.textContent='@keyframes float{to{transform:translateY(-24px) scale(1.5);opacity:.35}}';document.head.appendChild(st)}}
 return {start};
})();
