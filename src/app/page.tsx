import Header from "./header/header";
import HeroOverlay from "./heroOverlay/heroOverlay";
import HeroPage from "./heropage/HeroPage";
import BestSeller from "./products/bestSeller/BestSeller";
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






