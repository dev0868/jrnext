// app/itinerary/[slug]/page.tsx

import { notFound } from "next/navigation";
import ItineraryPage from "./ItinearyPage";

async function getPackageData(slug: string) {
  const response = await fetch(
    `https://qtizgcguhf.execute-api.ap-south-1.amazonaws.com/journey-routers/tour-packages?slug=${slug}`,
    { next: { revalidate: 300 } }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch package data");
  }
  const data = await response.json();
  if (!data || data.length === 0) {
    notFound();
  }
  return data;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const packageData = await getPackageData(params.slug);

  return <ItineraryPage slug={packageData[0]} />;
}
