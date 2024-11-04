import { DestinationsPage } from "@/components/destinations/DestinationsPage";
import { CITIES_DATA } from "@/lib/cities-data";

export default function Page() {
  return <DestinationsPage cities={CITIES_DATA} />;
}