// Orbit - ALADA FILE - LSFXM Central + Brokers Orbit
// Eita bodlale sudhu Orbit bodlabe, Header / Wallet / Leaderboard / Master / Copier / Demo te kono provab porbe na
// Orbit er animation, size, broker gula sudhu eikhane
import {useEffect,useState} from 'react';
export default function Orbit(){
 const brokers=['Exness','IC Markets','FBS','XM','OctaFX','Tickmill','Pepperstone','HFM'];
 const [angle,setAngle]=useState(0);
 useEffect(()=>{ const t=setInterval(()=>setAngle(a=>(a+1)%360),50); return ()=>clearInterval(t); },[]);
 return (<section style={{padding:16,textAlign:'center'}}>
  <div style={{position:'relative',width:280,height:280,margin:'0 auto',border:'1px dashed #D4AF37',borderRadius:'50%'}}>
   <div style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)',width:110,height:110,background:'radial-gradient(circle,#FFD700,#8a6d00)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,color:'#000',border:'3px solid #fff',boxShadow:'0 0 30px #FFD700'}}>👑 LSFXM</div>
   {brokers.map((b,i)=>{
     const a=(angle + i*(360/brokers.length))*Math.PI/180;
     const x=140+Math.cos(a)*115, y=140+Math.sin(a)*115;
     return <div key={b} style={{position:'absolute',left:x,top:y,transform:'translate(-50%,-50%)',background:'#111',border:'1px solid #D4AF37',padding:'4px 8px',borderRadius:20,fontSize:11,whiteSpace:'nowrap'}}>{b}</div>;
   })}
  </div>
  <div style={{color:'#aaa',fontSize:12,marginTop:10}}>Orbit - Central LSFXM + 8 Brokers ghurche - eita alada component</div>
 </section>);
}
