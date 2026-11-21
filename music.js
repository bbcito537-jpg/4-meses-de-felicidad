window.Music = (()=>{
  let ac,master,timer,on=false,beat=0;
  const progression=[[60,64,67,71],[57,60,64,69],[53,57,60,64],[55,59,62,67]];
  const melody=[72,76,79,76,74,72,69,72,74,77,81,79,76,74,72,67];
  function init(){if(ac)return;ac=new (window.AudioContext||window.webkitAudioContext)();master=ac.createGain();master.gain.value=.13;master.connect(ac.destination)}
  function pluck(freq,when,dur=.65,vol=.12){const o1=ac.createOscillator(),o2=ac.createOscillator(),g=ac.createGain(),lp=ac.createBiquadFilter();o1.type='triangle';o2.type='sine';o2.detune.value=7;lp.type='lowpass';lp.frequency.value=2200;g.gain.setValueAtTime(0.0001,when);g.gain.exponentialRampToValueAtTime(vol,when+.014);g.gain.exponentialRampToValueAtTime(0.0001,when+dur);o1.frequency.value=o2.frequency.value=freq;o1.connect(g);o2.connect(g);g.connect(lp);lp.connect(master);o1.start(when);o2.start(when);o1.stop(when+dur+.05);o2.stop(when+dur+.05)}
  const hz=n=>440*Math.pow(2,(n-69)/12);
  function schedule(){if(!on)return;const now=ac.currentTime+.04;const chord=progression[Math.floor(beat/8)%progression.length];for(let i=0;i<4;i++)pluck(hz(chord[i]-12),now+i*.18,.9,.045);const m=melody[beat%melody.length];pluck(hz(m),now+.05,.72,.09);if(beat%4===2)pluck(hz(m+7),now+.42,.48,.04);beat++;timer=setTimeout(schedule,720)}
  async function start(){init();await ac.resume();if(on)return;on=true;schedule()}
  function stop(){on=false;clearTimeout(timer);if(master)master.gain.setTargetAtTime(.0001,ac.currentTime,.08)}
  function isOn(){return on}
  return {start,stop,isOn};
})();
