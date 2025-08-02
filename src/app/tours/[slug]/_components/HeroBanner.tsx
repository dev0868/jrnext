import Image from "next/image";

const HeroBanner = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 py-6">
      <div className="w-full h-[400px] relative overflow-hidden rounded-xl shadow">
        <Image
          src={imageUrl||'https://source.unsplash.com/400x300/?mountain,travel'}
          alt="Hero Banner"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="relative h-48 rounded-xl overflow-hidden shadow"
          >
            <Image
              src="https://source.unsplash.com/400x300/?mountain,travel"
              alt="Gallery"
              fill
              className="object-cover"
            />
          </div>
        ))}
        <button className="col-span-2 bg-white border text-sm px-3 py-2 rounded-lg shadow hover:bg-gray-100 transition w-full">
          View All Images
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
