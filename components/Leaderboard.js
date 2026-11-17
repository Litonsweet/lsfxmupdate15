// Leaderboard - Top 10 / 100 / 110 - ALADA FILE
import {useState} from 'react';
export default function Leaderboard(){
 const [tab,setTab]=useState('Top 110');
 const masters=Array.from({length: tab==='Top 10'?10:tab==='Top 100'?100:110},(_,i)=>({r:i+1,roi:(12+((i*7)%40)).toFixed(1),win:70+(i%25)}));
 return (<section style={{padding:12}}>
  <h2 style={{color:'#FFD700'}}>Top Masters & Rankings</h2>
  <div style={{display:'flex',gap:8}}>{['Top 10','Top 100','Top 110'].map(t=><button key={t} onClick={()=>setTab(t)} style={{background:t===tab?'#D4AF37':'#222',color:t===tab?'#000':'#fff',border:'1px solid #D4AF37',padding:'8px 14px',borderRadius:20}}>{t}</button>)}</div>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',gap:10,marginTop:12}}>{masters.map(m=><div key={m.r} style={{background:'#111',border:'1px solid #333',borderRadius:14,padding:12}}><b>#{m.r} Master M{m.r}</b><div>ROI {m.roi}%</div><div>Win {m.win}%</div><div style={{marginTop:8,display:'flex',gap:6}}><button style={{background:'#ccc',border:'none',padding:'6px',borderRadius:8,flex:1}}>Details</button><button style={{background:'#D4AF37',border:'none',padding:'6px',borderRadius:8,flex:1}}>Strategy</button></div></div>)}</div>
 </section>);
}