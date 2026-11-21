window.Characters = (()=>{
  function person(ctx,x,y,s,opt={}){
    ctx.save();ctx.translate(x,y);ctx.scale(s,s);
    const skin=opt.skin||'#b87555', hair=opt.hair||'#201915', shirt=opt.shirt||'#111722', pants=opt.pants||'#283653';
    // shadow
    ctx.fillStyle='rgba(0,0,0,.22)';ctx.beginPath();ctx.ellipse(0,78,35,9,0,0,Math.PI*2);ctx.fill();
    // legs
    ctx.strokeStyle=pants;ctx.lineWidth=14;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-13,30);ctx.lineTo(-15,72);ctx.moveTo(13,30);ctx.lineTo(15,72);ctx.stroke();
    // torso
    ctx.fillStyle=shirt;roundRect(ctx,-28,-15,56,58,18);ctx.fill();
    // neck/head
    ctx.fillStyle=skin;roundRect(ctx,-8,-26,16,16,7);ctx.fill();ctx.beginPath();ctx.arc(0,-52,26,0,Math.PI*2);ctx.fill();
    // hair silhouette
    ctx.fillStyle=hair;ctx.beginPath();ctx.arc(0,-57,28,Math.PI,Math.PI*2);ctx.lineTo(27,-37);ctx.quadraticCurveTo(24,-4,13,8);ctx.lineTo(10,-37);ctx.quadraticCurveTo(0,-31,-11,-38);ctx.lineTo(-14,10);ctx.quadraticCurveTo(-28,-9,-28,-38);ctx.closePath();ctx.fill();
    if(opt.longHair){ctx.beginPath();ctx.moveTo(-25,-55);ctx.quadraticCurveTo(-38,-10,-23,24);ctx.lineTo(-8,7);ctx.quadraticCurveTo(-20,-17,-14,-48);ctx.fill();ctx.beginPath();ctx.moveTo(24,-55);ctx.quadraticCurveTo(38,-5,24,24);ctx.lineTo(8,8);ctx.quadraticCurveTo(20,-22,13,-49);ctx.fill()}
    // face
    ctx.fillStyle='#1e1820';ctx.beginPath();ctx.arc(-8,-53,2,0,Math.PI*2);ctx.arc(8,-53,2,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='rgba(70,30,25,.55)';ctx.lineWidth=1.8;ctx.beginPath();ctx.arc(0,-43,7,.2,Math.PI-.2);ctx.stroke();
    // arms
    ctx.strokeStyle=skin;ctx.lineWidth=11;ctx.beginPath();ctx.moveTo(-24,0);ctx.lineTo(-35,30+Math.sin(opt.phase||0)*4);ctx.moveTo(24,0);ctx.lineTo(35,28-Math.sin(opt.phase||0)*4);ctx.stroke();
    ctx.restore();
  }
  function angelo(ctx,x,y,s,phase=0){person(ctx,x,y,s,{skin:'#ad6f52',hair:'#171415',shirt:'#0b0e13',pants:'#202635',longHair:true,phase})}
  function bella(ctx,x,y,s,phase=0,jacket=true){person(ctx,x,y,s,{skin:'#d7a07a',hair:'#9a724c',shirt:jacket?'#d12839':'#f2eee6',pants:'#98a8df',longHair:true,phase});if(jacket){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.strokeStyle='#f7f4ef';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(-18,-7);ctx.lineTo(-18,35);ctx.moveTo(18,-7);ctx.lineTo(18,35);ctx.stroke();ctx.restore()}}
  function tzuyu(ctx,x,y,s,phase=0){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle='rgba(0,0,0,.2)';ctx.beginPath();ctx.ellipse(0,35,28,8,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#f6f2ea';ctx.beginPath();ctx.ellipse(0,5,30,36,0,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(0,-26,27,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.moveTo(-22,-45);ctx.lineTo(-12,-68);ctx.lineTo(-3,-48);ctx.moveTo(22,-45);ctx.lineTo(12,-68);ctx.lineTo(3,-48);ctx.fill();ctx.fillStyle='#5c5a59';ctx.beginPath();ctx.arc(10,-36,17,3.4,6.1);ctx.lineTo(2,-17);ctx.fill();ctx.fillStyle='#8ccaa0';ctx.beginPath();ctx.ellipse(-9,-27,4,7,0,0,Math.PI*2);ctx.ellipse(9,-27,4,7,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#f29ba5';ctx.beginPath();ctx.moveTo(-4,-14);ctx.lineTo(4,-14);ctx.lineTo(0,-9);ctx.closePath();ctx.fill();ctx.strokeStyle='#777';ctx.lineWidth=1;for(let i=-1;i<=1;i+=2){ctx.beginPath();ctx.moveTo(i*5,-9);ctx.lineTo(i*30,-12);ctx.stroke();ctx.beginPath();ctx.moveTo(i*5,-6);ctx.lineTo(i*29,0);ctx.stroke()}ctx.strokeStyle='#5c5a59';ctx.lineWidth=9;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(25,16);ctx.quadraticCurveTo(46,12,40,-10+Math.sin(phase)*5);ctx.stroke();ctx.restore()}
  function roundRect(ctx,x,y,w,h,r){ctx.beginPath();ctx.roundRect(x,y,w,h,r)}
  return {angelo,bella,tzuyu};
})();
