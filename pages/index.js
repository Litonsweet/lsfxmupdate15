// pages/index.js - SUDHU JORA DEY, kichu bodlay na
// Ekta Component update dile arekta nost hobe na - karon prottekta alada file
import Header from '../components/Header';
import Banner from '../components/Banner';
import Wallet from '../components/Wallet';
import ProfitShare from '../components/ProfitShare';
import SafetyPanel from '../components/SafetyPanel';
import Leaderboard from '../components/Leaderboard';
import MasterForm from '../components/MasterForm';
import CopierForm from '../components/CopierForm';
import DemoForm from '../components/DemoForm';
import FooterNav from '../components/FooterNav';
import Orbit from '../components/Orbit';
export default function Home(){
 return (<div style={{background:'#000',color:'#fff',minHeight:'100vh',fontFamily:'sans-serif'}}>
  <Header/><Banner/><Orbit/><Wallet/><ProfitShare/><SafetyPanel/><Leaderboard/><MasterForm/><CopierForm/><DemoForm/><FooterNav/>
 </div>);
}
