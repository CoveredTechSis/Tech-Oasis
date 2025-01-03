import Header from "../components/header/header"
import HeroOverlay from "../components/heroOverlay/heroOverlay";
import HeroPage from "../components/heropage/heropage";
import BestSeller from "../components/bestSeller/bestSeller";
import FeaturedProduct from "@/components/featuredProducts/featuredProducts";
import WorkspaceComponent from "@/components/workspaceComponent/workspaceComponent";
// import ProductList from "./products/page";

export default function Home() {
  return(
    <div>
      <Header/>
      <HeroPage/>
      <HeroOverlay/>
      <BestSeller/>
      <FeaturedProduct/>
      <WorkspaceComponent/>
       </div>
  
  )
  
}






