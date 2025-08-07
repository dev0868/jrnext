"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // optional: install lucide-react for icons

type Destination = {
  DestinationName: string;
  DestinationUrl: string;
  Gallary: {
    HeroBannerTitleImage: string;
  };
};

const Header = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);

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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          {/* Destinations Dropdown */}
          <div className="relative group">
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
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/career" className="hover:text-blue-600">
            Career
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open Menu"
        >
          {mobileOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </nav>

      {/* Mobile Nav (slide-down menu) */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-black bg-opacity-30 transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-72 bg-white h-full shadow-lg transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="p-4"
            onClick={() => setMobileOpen(false)}
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex flex-col gap-2 p-4">
            <Link
              href="/"
              className="py-2 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            {/* Destinations collapsible */}
            <div>
              <div className="font-medium py-2">Destinations</div>
              <div className="pl-3 border-l">
                {destinations.map((dest) => (
                  <Link
                    key={dest.DestinationName}
                    href={`/itineary/${dest.DestinationName.toLowerCase()}`}
                    className="flex items-center gap-3 py-2 hover:bg-gray-100 rounded"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Image
                      src={dest.Gallary?.HeroBannerTitleImage}
                      alt={dest.DestinationName}
                      className="w-8 h-8 object-cover rounded"
                    />
                    <span className="text-sm font-medium">
                      {dest.DestinationName}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/about"
              className="py-2 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/career"
              className="py-2 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Career
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
