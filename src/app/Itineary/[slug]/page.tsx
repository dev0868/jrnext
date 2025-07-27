// app/itinerary/[slug]/page.tsx

import ItineraryPage from "./ItinearyPage";

export default function Page({ params }: { params: { slug: string } }) {
  return <ItineraryPage/>;
}
