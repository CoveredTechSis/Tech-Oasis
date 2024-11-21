import Header from "../components/header/header"
import HeroOverlay from "../components/heroOverlay/heroOverlay";
import HeroPage from "../components/heropage/heropage";
import BestSeller from "../components/bestSeller/bestSeller";
// import ProductList from "./products/page";

export default function Home() {
  return(
    <div>
      <Header/>
      <HeroPage/>
      <HeroOverlay/>
      <BestSeller/>

       </div>
  
  )
  
}






