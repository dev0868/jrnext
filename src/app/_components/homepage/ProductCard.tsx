import { useEnquiryModal } from "@/app/context/EnquiryModalContext";
import { PhoneCall, Star } from "lucide-react";

type Props = {
  title: string;
  image: string;
  duration: string;
  rating: string;
  locations: string[];
  price: number;
  originalPrice: number;
  saveAmount: number;
  currency: string;
  tag?: { label: string; type: "flight" | "trending" | null } | null;
};

const ProductCard = ({
  title,
  image,
  duration,
  rating,
  locations,
  price,
  originalPrice,
  saveAmount,
  currency,
  tag,
}: Props) => {
  const { show } = useEnquiryModal();
  return (
    <div className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
      {/* Image */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        {tag?.label && (
          <div
            className={`absolute top-2 right-2 px-3 py-1 text-xs font-semibold text-white rounded-full ${
              tag.type === "flight" ? "bg-orange-500" : "bg-teal-600"
            }`}
          >
            {tag.label}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Duration + Rating */}
        <div className="text-sm text-gray-500 flex justify-between items-center">
          <span>{duration}</span>
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            {rating}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-base text-gray-900 leading-snug line-clamp-2">
          {title}
        </h3>

        {/* Locations */}
        <div className="flex flex-wrap gap-2 text-xs text-white mt-1">
          {locations.map((loc, i) => (
            <span key={i} className="bg-black/20 backdrop-blur px-2 py-0.5 rounded">
              {loc}
            </span>
          ))}
        </div>

        {/* Price Section */}
        <div className="mt-1 text-gray-800">
          <p className="text-base font-bold">
            ₹{price.toLocaleString("en-IN")}{" "}
            <span className="line-through text-sm text-gray-400 ml-1">
              ₹{originalPrice.toLocaleString("en-IN")}
            </span>
            <span className="ml-2 text-green-600 text-sm font-medium">
              SAVE ₹{saveAmount.toLocaleString("en-IN")}
            </span>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-3 flex items-center gap-2">
          <button
            aria-label="Phone call"
            className="bg-orange-600 text-white p-2 rounded-lg hover:bg-orange-700 transition"
          >
            <PhoneCall className="w-4 h-4" />
          </button>
          <button onClick={()=>show()} className="flex-1 cursor-pointer bg-gray-100 text-black font-medium px-3 py-2 rounded-lg hover:bg-gray-200 transition text-sm">
            Request Callback
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
