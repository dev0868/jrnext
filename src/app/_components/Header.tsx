"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Define the expected API response structure
type Destination = {
  DestinationName: string;
  DestinationUrl: string;
  Gallary: {
    HeroBannerTitleImage: string;
  };
};

const Header = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch(
          "https://2rltmjilx9.execute-api.ap-south-1.amazonaws.com/DataTransaction/Destination?destinationname=all"
        );
        const data = await res.json();
        if (Array.isArray(data)) setDestinations(data);
      } catch (err) {
        console.error("Failed to fetch destinations", err);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          JourneyRouters
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-gray-800 font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>

          {/* Destinations Dropdown (Hover-based) */}
          <div className="relative">
            <div className="group inline-block relative">
              <span className="cursor-pointer hover:text-blue-600">
                Destinations
              </span>

              <div className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-white border border-gray-200 rounded-lg shadow-md w-80 max-h-[400px] overflow-y-auto z-50">
                {destinations.map((dest) => (
                  <Link
                    key={dest.DestinationName}
                    href={`/itineary/${dest.DestinationName.toLowerCase()}`}
                    className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 hover:bg-gray-100 transition-colors last:border-none"
                  >
                    <img
                      src={dest.Gallary?.HeroBannerTitleImage}
                      alt={dest.DestinationName}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <span className="text-sm font-medium">
                      {dest.DestinationName}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/career" className="hover:text-blue-600">Career</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
