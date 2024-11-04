import { Metadata } from 'next';
import { CITIES_DATA } from "@/lib/cities-data";
import { CityDetails } from "@/components/destinations/CityDetails";
import { DestinationsPage } from "@/components/destinations/DestinationsPage";
import { notFound } from 'next/navigation';

// Group cities by continent and country for lookup
const CITIES_BY_CONTINENT: Record<string, typeof CITIES_DATA> = {
  asia: CITIES_DATA.filter(city => ['Thailand', 'Indonesia'].includes(city.country)),
  europe: CITIES_DATA.filter(city => ['Portugal'].includes(city.country)),
};

const CITIES_BY_COUNTRY: Record<string, typeof CITIES_DATA> = {
  thailand: CITIES_DATA.filter(city => city.country === 'Thailand'),
  indonesia: CITIES_DATA.filter(city => city.country === 'Indonesia'),
  portugal: CITIES_DATA.filter(city => city.country === 'Portugal'),
};

export async function generateStaticParams() {
  const cityParams = CITIES_DATA.map((city) => ({
    slug: city.id,
  }));

  const continentParams = Object.keys(CITIES_BY_CONTINENT).map((continent) => ({
    slug: continent,
  }));

  const countryParams = Object.keys(CITIES_BY_COUNTRY).map((country) => ({
    slug: country,
  }));

  return [...cityParams, ...continentParams, ...countryParams];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Check if it's a city page
  const city = CITIES_DATA.find((city) => city.id === params.slug);
  if (city) {
    return {
      title: `${city.city}, ${city.country} - Digital Nomad Guide`,
      description: city.description,
    };
  }

  // Check if it's a continent page
  const continentCities = CITIES_BY_CONTINENT[params.slug];
  if (continentCities) {
    const continent = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
    return {
      title: `Best Digital Nomad Destinations in ${continent} - Digital Nomad Guide`,
      description: `Discover the best cities for digital nomads in ${continent}. Compare cost of living, internet speed, and more.`,
    };
  }

  // Check if it's a country page
  const countryCities = CITIES_BY_COUNTRY[params.slug];
  if (countryCities) {
    const country = countryCities[0].country;
    return {
      title: `Best Digital Nomad Cities in ${country} - Digital Nomad Guide`,
      description: `Explore the best cities for digital nomads in ${country}. Compare cost of living, internet speed, and more.`,
    };
  }

  return {
    title: 'Digital Nomad Guide',
    description: 'Find your perfect digital nomad destination',
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  // Check if it's a city page
  const cityData = CITIES_DATA.find((city) => city.id === params.slug);
  if (cityData) {
    return <CityDetails city={cityData} />;
  }

  // Check if it's a continent or country page
  const continentCities = CITIES_BY_CONTINENT[params.slug];
  const countryCities = CITIES_BY_COUNTRY[params.slug];
  
  if (continentCities || countryCities) {
    const cities = continentCities || countryCities;
    const title = continentCities 
      ? `Digital Nomad Destinations in ${params.slug.charAt(0).toUpperCase() + params.slug.slice(1)}`
      : `Digital Nomad Cities in ${cities[0].country}`;
    
    return <DestinationsPage cities={cities} title={title} />;
  }

  notFound();
}