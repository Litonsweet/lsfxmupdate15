// Profit Share - Master + Copier - ALADA FILE
export default function ProfitShare(){
 return (<section style={{padding:12}}>
  <div style={{background:'#111',border:'1px solid #D4AF37',borderRadius:16,padding:14,marginBottom:10}}><h3 style={{color:'#FFD700'}}>Master Profit Share</h3><div>Profit $100 - Master $30 - Refer Pool 20% $6 - Admin 5% $5 - Master Keeps $19</div><div style={{display:'flex',gap:8,marginTop:10}}><button style={{flex:1,background:'#D4AF37',padding:10,border:'none',borderRadius:10}}>Earn</button><button style={{flex:1,background:'#ddd',padding:10,border:'none',borderRadius:10}}>Transfer</button></div></div>
  <div style={{background:'#111',border:'1px solid #888',borderRadius:16,padding:14}}><h3>Copier Profit Share</h3><div>Profit $45 - Admin 5% $2.25 - Copier Gets $42.75</div><div style={{display:'flex',gap:8,marginTop:10}}><button style={{flex:1,background:'#14b8a6',padding:10,border:'none',borderRadius:10}}>Deposit</button><button style={{flex:1,background:'#ddd',padding:10,border:'none',borderRadius:10}}>Transfer</button></div></div>
 </section>);
}