import { useSearchParams } from "react-router-dom";
import './Home.css';

function Home() {
  const [searchParams] = useSearchParams();

  const to = searchParams.get("to");
  const from = searchParams.get("from");

  return (
    <>
      <div className="greeting-container">
        <span>Dear {to}🌸</span>
        <p>Happ Diwali...🍁</p>
        <span className="from-text">From Your Best Friend💝{from}</span>
      </div>
    </>
  );
}

export default Home;
