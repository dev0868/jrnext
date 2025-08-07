"use client";

import FAQSection from "@/app/_components/FAQSection";
import BookingSidebar from "./_components/BookingSidebar";
import HeroBanner from "./_components/HeroBanner";
import ItineraryAccordion from "./_components/ItineraryAccordion";
import { TourPackage } from "./TourTypes";
import InterlinkedSection from "@/app/_components/InterlinkedSection";

const ItineraryPage = ({ slug }: { slug: TourPackage }) => {
  console.log(slug);

  return (
    <div className="relative">
      <HeroBanner data={slug} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        <div className="lg:col-span-2 space-y-6">
          <ItineraryAccordion data={slug} />
          {/* <HighlightsSection highlights={mockData.highlights} />
          <DayWiseAccordion itinerary={mockData.itinerary} /> */}
        </div>
        <div className="lg:col-span-1">
          <BookingSidebar data={slug} />
        </div>
      </div>
      <FAQSection />
      <InterlinkedSection />
    </div>
  );
};

export default ItineraryPage;
