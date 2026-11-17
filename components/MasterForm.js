// Master Form - ALADA FILE - eita bodlale Copier/Demo nost hobe na
export default function MasterForm(){
 return (<section style={{padding:12,background:'#111',margin:12,borderRadius:16,border:'1px solid #D4AF37'}}>
  <h3 style={{color:'#FFD700'}}>Create Master Slot</h3>
  <label>Strategy Name</label><input style={{width:'100%',padding:10,margin:'6px 0',borderRadius:8}} placeholder="Strategy Name"/>
  <div style={{display:'flex',gap:8}}><select style={{flex:1,padding:10}}><option>MT4</option><option>MT5</option></select><select style={{flex:1,padding:10}}><option>Broker Name</option><option>Exness</option><option>IC Markets</option></select></div>
  <div style={{display:'flex',gap:8,marginTop:8}}><select style={{flex:1,padding:10}}><option>Standard</option><option>Zero</option><option>Pro</option><option>Raw</option><option>ECN</option><option>Other</option></select><input style={{flex:1,padding:10}} placeholder="Server"/></div>
  <input style={{width:'100%',padding:10,marginTop:8}} placeholder="Trading Id"/>
  <div style={{marginTop:10,color:'#FFD700'}}>Level 1 : 10% + Level 2 : 6% + Level 3 : 4% = 20%</div>
  <div style={{marginTop:8}}>Master Profit Share: <b>30%</b> (1% - 80%)</div>
  <button style={{width:'100%',background:'#D4AF37',padding:12,marginTop:12,border:'none',borderRadius:10,fontWeight:800}}>Pay $5 & Launch</button>
 </section>);
}