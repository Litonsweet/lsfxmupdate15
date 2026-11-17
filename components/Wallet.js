// Wallet - Trading Capital / Earning / Refer Vault - ALADA FILE
export default function Wallet(){
 const box={background:'linear-gradient(145deg,#1a1a1a,#0a0a0a)',border:'1px solid #D4AF37',borderRadius:16,padding:14,flex:1,textAlign:'center'};
 return (<section style={{display:'flex',gap:10,padding:12}}>
  <div style={box}><div>Trading Capital</div><b style={{color:'#FFD700',fontSize:20}}>$12,450</b></div>
  <div style={box}><div>Earning Vault</div><b style={{color:'#FFD700',fontSize:20}}>$3,840</b></div>
  <div style={box}><div>Refer Vault</div><b style={{color:'#FFD700',fontSize:20}}>$1,260</b></div>
 </section>);
}