"use client";

import { useEffect, useRef, useState } from "react";
import ProductCard from "./homepage/ProductCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const AllPackages = () => {
  const [destinations, setDestinations] = useState<string[]>([]);
  const [activeDest, setActiveDest] = useState<string>("");
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const tabRef = useRef<HTMLDivElement>(null);

  const LIMIT = 20;

  // Fetch destinations
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch(
          "https://2rltmjilx9.execute-api.ap-south-1.amazonaws.com/DataTransaction/Destination?destinationname=all"
        );
        const data = await res.json();
        const names = data.map(
          (dest: { DestinationName: string }) => dest.DestinationName
        );
        setDestinations(names);
        setActiveDest(names[0]);
      } catch (err) {
        console.error("Failed to fetch destinations", err);
      }
    };

    fetchDestinations();
  }, []);

  // Fetch packages when destination or page changes
  useEffect(() => {
    if (!activeDest) return;
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://2rltmjilx9.execute-api.ap-south-1.amazonaws.com/DataTransaction/SearchPackages?destinationname=${activeDest}&offset=${
            page * LIMIT
          }&limit=${LIMIT}`
        );
        const data = await res.json();
        const newPackages = data.data || [];

        if (page === 0) {
          setPackages(newPackages);
        } else {
          setPackages((prev) => [...prev, ...newPackages]);
        }

        if (newPackages.length < LIMIT) setHasMore(false);
        else setHasMore(true);

        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch packages", err);
        setLoading(false);
      }
    };

    fetchPackages();
  }, [activeDest, page]);

  // Reset pagination on destination change
  useEffect(() => {
    setPage(0);
    setPackages([]);
    setHasMore(true);
  }, [activeDest]);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;

      if (nearBottom && !loading && hasMore) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  // Scroll tabs
  const scrollTabs = (dir: "left" | "right") => {
    const container = tabRef.current;
    if (!container) return;
    const scrollAmount = dir === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Find the Perfect Trip — Tailored for Every Destination
      </h2>

      {/* Sticky Tabs with Scroll Buttons */}
      <div className="sticky top-[60px] no-scrollbar  z-40 bg-white py-2 border-b border-gray-200 flex items-center gap-2">
        <button
          onClick={() => scrollTabs("left")}
          className="p-1.5 cursor-pointer bg-gray-100 rounded-full shadow hover:bg-gray-200"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div
          ref={tabRef}
          className="flex gap-3 overflow-x-auto no-scrollbar flex-1 px-1"
        >
          {destinations.map((dest) => (
            <button
              key={dest}
              onClick={() => setActiveDest(dest)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap shadow-sm hover:bg-orange-100 ${
                activeDest === dest
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {dest}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTabs("right")}
          className="p-1.5 cursor-pointer bg-gray-100 rounded-full shadow hover:bg-gray-200"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Package Grid */}
      {loading && packages.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">Loading packages...</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {packages.slice(0, 20).map((pkg) => (
            <Link href={`tours/${pkg.Slug}`} key={pkg.PackageId}>
              <ProductCard
                title={pkg.PackageTitle}
                image={pkg.HeroBanners?.Landscape}
                duration={`${pkg.Days} days & ${pkg.Nights} nights`}
                rating={pkg.Rating}
                locations={
                  pkg.Itineary?.slice(0, 3).map(
                    (i: { ActivityName: string }) => i.ActivityName
                  ) || []
                }
                price={Number(pkg.ShowCasePrice)}
                originalPrice={Number(pkg.BasePrice)}
                saveAmount={Number(pkg.BasePrice) - Number(pkg.ShowCasePrice)}
                currency="INR"
                tag={null}
              />
            </Link>
          ))}
        </div>
      )}

      {/* Loader on Scroll */}
      {loading && packages.length > 0 && (
        <p className="text-center mt-6 text-gray-500">Loading more...</p>
      )}
      {!hasMore && !loading && (
        <p className="text-center mt-6 text-gray-400">No more packages</p>
      )}
    </section>
  );
};

export default AllPackages;
