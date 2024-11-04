import { Metadata } from 'next';
import { CITIES_DATA } from "@/lib/cities-data";
import { CityDetails } from "@/components/destinations/CityDetails";

export async function generateStaticParams() {
  return CITIES_DATA.map((city) => ({
    id: city.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const city = CITIES_DATA.find((city) => city.id === params.id);
  
  return {
    title: `${city?.city}, ${city?.country} - Digital Nomad Guide | Freaking Nomads`,
    description: city?.description,
  };
}

export default function CityPage({ params }: { params: { id: string } }) {
  const cityData = CITIES_DATA.find((city) => city.id === params.id);

  if (!cityData) {
    return null;
  }

  return <CityDetails city={cityData} />;
}