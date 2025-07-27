"use client";

import HeroBanner from "./_components/HeroBanner";
import ItineraryAccordion from "./_components/ItineraryAccordion";


const ItineraryPage = ({ slug }: { slug: string }) => {
  // TODO: Replace with API fetch
  const mockData = {
    title: "Thrilling Leh Ladakh Bike Adventure",
    heroImage: "https://via.placeholder.com/900x500",
    highlights: [
      "Experience Khardung-La Pass",
      "Marvel at Rancho’s School",
      "Camp at Pangong Lake",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh | Sightseeing Tour",
        description: "Explore the scenic beauty of Leh with a local guide.",
        image: "https://via.placeholder.com/400x200",
      },
      {
        day: 2,
        title: "Sham Valley Ride",
        description: "Discover Magnetic Hill and Gurudwara Pathar Sahib.",
        image: "https://via.placeholder.com/400x200",
      },
    ],
    price: 33500,
    rating: 4.6,
  };

  return (
    <div className="relative">
      <HeroBanner/>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        <div className="lg:col-span-2 space-y-6">
            <ItineraryAccordion/>
          {/* <HighlightsSection highlights={mockData.highlights} />
          <DayWiseAccordion itinerary={mockData.itinerary} /> */}
        </div>
        <div className="lg:col-span-1">
          {/* <BookingSidebar title={mockData.title} price={mockData.price} /> */}
        </div>
      </div>
    </div>
  );
};

export default ItineraryPage;
