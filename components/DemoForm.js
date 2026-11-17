// Demo Form - ALADA FILE - Teal/Emerald, LSFXM lekha nai
export default function DemoForm(){
 return (<section style={{padding:12,background:'#0f2a2a',margin:12,borderRadius:16,border:'1px solid #2dd4bf'}}>
  <h3 style={{color:'#5eead4'}}>Create Demo</h3>
  <select style={{width:'100%',padding:10}}><option>MT4</option><option>MT5</option></select>
  <input style={{width:'100%',padding:10,marginTop:8}} placeholder="Broker"/>
  <input style={{width:'100%',padding:10,marginTop:8}} placeholder="Deposit - Max $2,000,000 - blank = $20,000"/>
  <div style={{marginTop:8}}>Auto Password: DEMO-XXX | Auto $20,000 Deposit</div>
  <button style={{width:'100%',background:'#14b8a6',padding:12,marginTop:10,border:'none',borderRadius:10,fontWeight:800}}>Create Demo</button>
 </section>);
}