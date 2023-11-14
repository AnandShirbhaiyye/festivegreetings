import { useSearchParams } from "react-router-dom";
import "./Home.css";
import Img1 from "./diwali-lamp.png";
import Img2 from "./candle.png";
import { useState } from "react";

const GREETINGS = [
  "सर्व मित्र परिवाराला …दीपावलीच्या धनदायी ,प्रकाशमय,चैतन्यदायी मंगलमय शुभेच्छा !!!दीपावलीच्या हार्दिक शुभेछा…",
  "लक्ष लक्ष दिव्यांनी उजळुन निघो ही निशा घेऊनि येवो नवी उमेद नवी आशा, सोबत आमच्या लक्ष लक्ष शुभेच्छा!",
  "फटाके, कंदील अन् पणत्यांची रोषणाई,चिवडा-चकली, लाडू-करंजीची ही लज्जतच न्यारी,नव्यानवलाईची दिवाळी येता, आनंदली दुनिया सारी!दिवाळीच्या हार्दिक शुभेच्छा!",
  "पहीला दिवा आज लागला दारी,सुखाची किरणे येई घरी,पूर्ण होवो तुमच्या सर्व इच्छा,दिपावलीच्या हार्दिक शुभेच्छा.",
  "नवी स्वप्ने नवी क्षितिजे, घेउन येवो ही दिवाळी,ध्येयार्पण प्रयत्नांना, दिव्ययशाची मिळो झळाळी,आयुष्यात सोनेरी क्षण घेऊन येवो, ही दिवाळी",
];

function Home() {
  const [searchParams] = useSearchParams();

  const [to, setTo] = useState(searchParams.get("to"));
  const [from, setFrom] = useState(searchParams.get("from"));
  const [greetingNumber, setGreetingNumber] = useState(
    searchParams.get("g") >= GREETINGS.length ? 0 : searchParams.get("g") || 0
  );
  const [themeNumber, setThemeNumber] = useState(searchParams.get("t"));

  return (
    <>
      <div>
        <div className={`greeting-container ${`theme-${themeNumber}`}`}>
          <img src={Img1} className="diwali-lamp left-lamp" alt="diwali-img" />
          <img src={Img1} className="diwali-lamp right-lamp" alt="diwali-img" />
          <br />
          <br />
          <br />
          <span>Dear {to}🌸</span>
          <p>{GREETINGS[greetingNumber]}</p>
          <span className="from-text">From Your Best Friend💝{from}</span>{" "}
          <br />
          <br />
          <br />
          <img src={Img2} className="normal-lamp" alt="diwali-img" />
        </div>

        <p className="create-your-own">
         Do you want to create your own Diwali Greeting? Customize it here..👇
        </p>

        <p className="url" onClick={()=>{
          const url = `${import.meta.env.VITE_BASE_URL}?to=${to}&from=${from}&g=${greetingNumber}&t=${themeNumber}`;  
          navigator.clipboard.writeText(url);
          alert(`"Copied to clipboard!:" ${url}`)
        }}>
          {import.meta.env.VITE_BASE_URL}?to={to}&from={from}&g={greetingNumber}
          &t={themeNumber}
        </p>

        <div className="input-container">
          <input
            className="input"
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
            }}
          />

          <input
            className="input"
            type="text"
            placeholder="From"
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
            }}
          />

          <select
            className="input"
            value={themeNumber}
            onChange={(e) => {
              setThemeNumber(e.target.value);
            }}
          >
            <option value="0">None</option>
            <option value="1">Theme 1</option>
            <option value="2">Theme 2</option>
            <option value="3">Theme 3</option>
            <option value="4">Theme 4</option>
            <option value="5">Theme 5</option>
          </select>

          <select
            className="input"
            value={greetingNumber}
            onChange={(e) => {
              setGreetingNumber(e.target.value);
            }}
          >
            <option value="0">Greeting 1</option>
            <option value="1">Greeting 2</option>
            <option value="2">Greeting 3</option>
            <option value="3">Greeting 4</option>
            <option value="4">Greeting 5</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Home;
