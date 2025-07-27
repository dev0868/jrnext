"use client";

const destinations = [
  "Goa Holidays",
  "Ladakh Trips",
  "Dubai Tours",
  "Bali Packages",
  "Thailand Vacations",
  "Andaman Escape",
  "Kerala Backwaters",
  "Kashmir Paradise",
  "Europe Highlights",
  "Vietnam Discovery",
  "Maldives Getaway",
  "Manali Adventures",
  "Rajasthan Heritage",
  "Singapore Fun",
  "Sri Lanka Beauty",
  "Meghalaya Nature",
  "Japan Culture",
  "Bhutan Serenity",
  "Australia Dreams",
  "Switzerland Alps"
];

const InterlinkedSection = () => {
  return (
    <section className="px-6 py-10 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-6 text-left">
        Explore Our Top Travel Destinations
      </h2>

      {/* Navigation Links */}
      <div className="flex flex-wrap  gap-4 mb-10">
        {destinations.map((name, i) => (
          <a
            key={name}
            href={`#dest-${i + 1}`}
            className="text-sm bg-orange-100 hover:bg-orange-200 px-4 py-2 rounded-full transition whitespace-nowrap"
          >
            {name}
          </a>
        ))}
      </div>

    </section>
  );
};

export default InterlinkedSection;
