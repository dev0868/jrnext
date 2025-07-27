import AllPackages from "./_components/AllPackages";
import FAQSection from "./_components/FAQSection";
import InterlinkedSection from "./_components/InterlinkedSection";
import Hero from "./_components/homepage/Hero";
import ProductCard from "./_components/homepage/ProductCard";
import PromotionalBanner from "./_components/homepage/PromotionalBanneer";
import TrendingProducts from "./_components/homepage/TrendingProducts";

export default function Home() {
  return (
    <div>
<Hero/>
<TrendingProducts/>
<PromotionalBanner/>
<AllPackages/>
<FAQSection/>
<InterlinkedSection/>
    </div>
  );
}
