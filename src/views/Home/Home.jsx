import { useSearchParams } from "react-router-dom"

function Home() {
    const [searchParams] = useSearchParams();

    const to = searchParams.get("to");
    const from = searchParams.get("from");

  return (
   <>
     To {to} from {from}
   </>
  )
}

export default Home