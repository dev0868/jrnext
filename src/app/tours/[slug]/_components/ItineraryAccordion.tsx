"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Bed, Info } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

const itineraryData = [
  {
    day: 1,
    title: "Arrival in Phuket",
    description:
      "Upon arrival at Phuket Airport, meet our representative and transfer to your hotel by private car. Check-in and enjoy the rest of the day at leisure.",
    images: [
      "https://packageimage.s3.ap-south-1.amazonaws.com/Thailand/image_1739948265.jpg",
    ],
    hotel: {
      name: "Casa Del M Resort",
      rating: 4,
      facilities: ["Hospital", "ATM", "Police Station"],
    },
  },
  {
    day: 2,
    title: "Phi Phi Island Tour & Snorkelling",
    description:
      "Set off on a speedboat tour to Phi Phi Islands. Explore Maya Bay, Pi Le Cave, Viking Cave. Enjoy lunch and snorkel in crystal-clear waters.",
    images: [
      "https://packageimage.s3.ap-south-1.amazonaws.com/Thailand/image_1738406802.jpg",
    ],
    hotel: {
      name: "Casa Del M Resort",
      rating: 4,
      facilities: ["Hospital", "ATM"],
    },
  },
  // Add more days as needed...
];

const ItineraryAccordion = () => {
  const [openDay, setOpenDay] = useState<number>(1);

  const toggleDay = (day: number) => {
    setOpenDay(openDay === day ? -1 : day);
  };

  return (
    <section className="bg-white p-4 md:p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Trip Itinerary</h2>

      {itineraryData.map((dayData) => {
        const isOpen = openDay === dayData.day;

        return (
          <div
            key={dayData.day}
            className="mb-6 border border-gray-200 rounded overflow-hidden"
          >
            {/* Image Carousel */}
            <div className="relative w-full h-[200px] sm:h-[280px] overflow-hidden">
              <Image
                src={dayData.images[0]}
                alt={`Day ${dayData.day} image`}
                layout="fill"
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                {dayData.images.length} Images
              </div>
            </div>

            {/* Day Header */}
            <button
              onClick={() => toggleDay(dayData.day)}
              className="flex justify-between items-center w-full px-4 py-3 bg-white border-t border-b text-left"
            >
              <div>
                <span className="text-orange-500 font-semibold mr-2">
                  DAY {dayData.day}
                </span>
                <span className="font-medium">{dayData.title}</span>
              </div>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {/* Expandable Content */}
            <div
              className={clsx(
                "transition-all duration-300 px-4 bg-gray-50 overflow-hidden",
                isOpen ? "max-h-screen py-4" : "max-h-0 py-0"
              )}
            >
              <p className="text-sm text-gray-700 mb-3">{dayData.description}</p>

              <div className="flex items-start gap-2 text-sm text-gray-600">
                <Bed className="w-4 h-4 mt-1 text-orange-500" />
                <div>
                  <strong className="text-gray-800">{dayData.hotel.name}</strong>{" "}
                  <span className="ml-2 text-yellow-500">★ {dayData.hotel.rating}</span>
                  <ul className="list-disc list-inside mt-1">
                    {dayData.hotel.facilities.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ItineraryAccordion;
