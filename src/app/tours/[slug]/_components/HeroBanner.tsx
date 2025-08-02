import Image from "next/image";
import { TourPackage } from "../TourTypes";

const HeroBanner = ({ data }: { data: TourPackage }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 py-6">
      <div className="w-full h-[400px] relative overflow-hidden rounded-xl shadow">
        <Image
          src={
            data?.Itineary[0]?.ActivityImg ||
            "https://source.unsplash.com/400x300/?mountain,travel"
          }
          alt="Hero Banner"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {data?.Itineary.slice(1, 5).map((url, i) => (
          <div
            key={i}
            className="relative h-48 rounded-xl overflow-hidden shadow"
          >
            <Image
              src={
                url.ActivityImg ||
                "https://source.unsplash.com/400x300/?mountain,travel"
              }
              alt={`Gallery image ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
