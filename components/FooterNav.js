// Bottom Nav - ALADA FILE
export default function FooterNav(){
 return (<nav style={{position:'sticky',bottom:0,display:'flex',background:'#000',borderTop:'1px solid #333',padding:10}}>{['Home','Dashboard','Accounts','Terminal','Refer'].map(n=><div key={n} style={{flex:1,textAlign:'center',color:'#FFD700'}}>{n}</div>)}</nav>);
}