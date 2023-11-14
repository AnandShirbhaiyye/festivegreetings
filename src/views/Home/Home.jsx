import { useSearchParams } from "react-router-dom";
import './Home.css';
import Img1 from './diwali-lamp.png';
import Img2 from './candle.png';

const GREETINGS = [
   "सर्व मित्र परिवाराला …दीपावलीच्या धनदायी ,प्रकाशमय,चैतन्यदायी मंगलमय शुभेच्छा !!!दीपावलीच्या हार्दिक शुभेछा…" ,
   "लक्ष लक्ष दिव्यांनी उजळुन निघो ही निशा घेऊनि येवो नवी उमेद नवी आशा, सोबत आमच्या लक्ष लक्ष शुभेच्छा!",
   "फटाके, कंदील अन् पणत्यांची रोषणाई,चिवडा-चकली, लाडू-करंजीची ही लज्जतच न्यारी,नव्यानवलाईची दिवाळी येता, आनंदली दुनिया सारी!दिवाळीच्या हार्दिक शुभेच्छा!",
   "पहीला दिवा आज लागला दारी,सुखाची किरणे येई घरी,पूर्ण होवो तुमच्या सर्व इच्छा,दिपावलीच्या हार्दिक शुभेच्छा.",
   "नवी स्वप्ने नवी क्षितिजे, घेउन येवो ही दिवाळी,ध्येयार्पण प्रयत्नांना, दिव्ययशाची मिळो झळाळी,आयुष्यात सोनेरी क्षण घेऊन येवो, ही दिवाळी"
]

function Home() {
  const [searchParams] = useSearchParams();

  const to = searchParams.get("to");
  const from = searchParams.get("from");
  const greetingNumber = searchParams.get("g") >=  GREETINGS.length ? 0 : searchParams.get("g") || 0 ;

  return (
    <>
    <div>
    <div className="greeting-container">
      <img src={Img1} className="diwali-lamp left-lamp" alt="diwali-img" />
      <img src={Img1} className="diwali-lamp right-lamp" alt="diwali-img" /><br/><br/><br/>
        <span>Dear {to}🌸</span>
        <p>{GREETINGS[greetingNumber]}</p>
        <span className="from-text">From Your Best Friend💝{from}</span><br/><br/><br/>
        <img src={Img2} className="normal-lamp" alt="diwali-img" />
      </div>
    </div>
    </>
  );
}

export default Home;
