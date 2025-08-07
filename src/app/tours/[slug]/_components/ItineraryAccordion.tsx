"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Bed } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

// --- Types for data ---
type HotelType = {
  HotelName: string;
  HotelRatting: number;
  NearByFacilities: string[];
  HotelImg?: string;
};

type ItineraryDayType = {
  Day: number;
  DayTitle: string;
  Descriptions: string;
  ActivityImg: string;
  Hotel: HotelType;
};

type ItineraryAccordionProps = {
  data: {
    Itineary: ItineraryDayType[];
  };
};

const ItineraryAccordion = ({ data }: ItineraryAccordionProps) => {
  const [openDay, setOpenDay] = useState<number>(data?.Itineary[0]?.Day ?? 1);

  const toggleDay = (day: number) => {
    setOpenDay(openDay === day ? -1 : day);
  };

  return (
    <section className="bg-white p-4 md:p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Trip Itinerary</h2>

      {data?.Itineary.map((dayData) => {
        const isOpen = openDay === dayData.Day;

        return (
          <div
            key={dayData.Day}
            className="mb-6 border border-gray-200 rounded overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative w-full h-[200px] sm:h-[280px] overflow-hidden">
              <Image
                src={dayData.ActivityImg}
                alt={`Day ${dayData.Day} image`}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                Image {dayData.Day}
              </div>
            </div>

            {/* Day Header */}
            <button
              onClick={() => toggleDay(dayData.Day)}
              className="flex justify-between items-center w-full px-4 py-3 bg-white border-t border-b text-left"
            >
              <div>
                <span className="text-orange-500 font-semibold mr-2">
                  DAY {dayData.Day}
                </span>
                <span className="font-medium">{dayData.DayTitle}</span>
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
              <p className="text-sm text-gray-700 mb-3">
                {dayData.Descriptions}
              </p>

              <div className="flex items-start gap-2 text-sm text-gray-600">
                <Bed className="w-4 h-4 mt-1 text-orange-500" />
                <div>
                  <strong className="text-gray-800">
                    {dayData.Hotel?.HotelName}
                  </strong>
                  <span className="ml-2 text-yellow-500">
                    ★ {dayData.Hotel?.HotelRatting || "-"}
                  </span>
                  <ul className="list-disc list-inside mt-1">
                    {dayData.Hotel?.NearByFacilities?.map((f, i) => (
                      <li key={i}>{f}</li>
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
