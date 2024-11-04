export interface City {
  id: string;
  city: string;
  country: string;
  description: string;
  image: string;
  internetSpeed: number;
  temperature: number;
  cost: number;
  timezone: string;
  upvotes: number;
  downvotes: number;
  trending: boolean;
  popular: boolean;
  expenses: {
    housing: {
      oneBedroom: number;
      twoBedroom: number;
    };
    food: {
      cheapMeal: number;
      midRangeMeal: number;
      coffee: number;
      water: number;
    };
    entertainment: {
      gym: number;
      cinema: number;
      beer: number;
      cocktail: number;
    };
    transport: {
      publicTransport: number;
      taxiPerKm: number;
    };
  };
  coworkingSpaces: WorkSpace[];
  cafes: WorkSpace[];
  coliving: Coliving[];
}

export interface WorkSpace {
  name: string;
  image: string;
  price: string;
  speed: number;
  upvotes: number;
  downvotes: number;
}

export interface Coliving {
  name: string;
  image: string;
  price: string;
  amenities: string[];
  upvotes: number;
  downvotes: number;
}

export interface FilterState {
  search: string;
  continent: string | null;
  country: string | null;
  costRange: [number, number];
  internetSpeed: number;
  temperature: number;
}