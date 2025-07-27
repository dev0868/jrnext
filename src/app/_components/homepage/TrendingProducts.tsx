'use client';
import { useRef, useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // clean icons

type Package = {
  PackageTitle: string;
  HeroBanners: {
    Landscape: string;
  };
  Days: number;
  Nights: number;
  Rating: string;
  Itineary: { ActivityName: string }[];
  ShowCasePrice: string;
  BasePrice: string;
  PackageId: string;
};

const TrendingProducts = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (container) {
      const newScroll =
        direction === 'left'
          ? container.scrollLeft - container.clientWidth
          : container.scrollLeft + container.clientWidth;
      container.scrollTo({ left: newScroll, behavior: 'smooth' });
    }
  };

  const checkScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    setShowLeftBtn(container.scrollLeft > 0);
    setShowRightBtn(
      container.scrollLeft + container.clientWidth < container.scrollWidth - 1
    );
  };

  useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    checkScroll(); 

    return () => {
      container?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [packages]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await fetch(
          'https://2rltmjilx9.execute-api.ap-south-1.amazonaws.com/DataTransaction/SearchPackages?DaysLessThan=6&limit=20'
        );
        const data = await res.json();
        if (Array.isArray(data.data)) {
          setPackages(data.data);
        }
      } catch (err) {
        console.error('Error fetching packages:', err);
      }
    };
    fetchPackages();
  }, []);

  return (
    <section className="py-10 px-4 bg-gray-100 relative">
      <h2 className="text-3xl font-bold mb-2">
        Trending <span className="text-orange-500">Products ✦</span>
      </h2>
      <p className="text-gray-600 mb-6">Curated with expertise</p>

      {showLeftBtn && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 ml-2 hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      {showRightBtn && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 mr-2 hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {packages.map((pkg) => (
          <div key={pkg.PackageId} className="flex-shrink-0 w-[300px]">
            <ProductCard
              title={pkg.PackageTitle}
              image={pkg.HeroBanners?.Landscape}
              duration={`${pkg.Days} days & ${pkg.Nights} nights`}
              rating={pkg.Rating}
              locations={pkg.Itineary.slice(0, 3).map((i) => i.ActivityName)}
              price={Number(pkg.ShowCasePrice)}
              originalPrice={Number(pkg.BasePrice)}
              saveAmount={
                Number(pkg.BasePrice) - Number(pkg.ShowCasePrice)
              }
              currency="INR"
              tag={null}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
