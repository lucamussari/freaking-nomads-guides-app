export const CITIES_DATA = [
  {
    id: "chiang-mai",
    city: "Chiang Mai",
    country: "Thailand",
    description: "Popular digital nomad hub in Northern Thailand known for its temples, food, and low cost of living.",
    image: "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e",
    internetSpeed: 100,
    temperature: 28,
    cost: 1200,
    timezone: "UTC+7",
    upvotes: 2453,
    downvotes: 124,
    trending: true,
    popular: true,
    expenses: {
      housing: {
        oneBedroom: 500,
        twoBedroom: 800,
      },
      food: {
        cheapMeal: 3,
        midRangeMeal: 15,
        coffee: 2.5,
        water: 0.5,
      },
      entertainment: {
        gym: 35,
        cinema: 6,
        beer: 2.5,
        cocktail: 6,
      },
      transport: {
        publicTransport: 0.8,
        taxiPerKm: 0.5,
      },
    },
    coworkingSpaces: [
      {
        name: "Punspace Nimman",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        price: "200/month",
        speed: 100,
        upvotes: 234,
        downvotes: 12,
      },
      {
        name: "Hub53",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
        price: "180/month",
        speed: 90,
        upvotes: 187,
        downvotes: 15,
      },
    ],
    cafes: [
      {
        name: "Graph Cafe",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
        price: "$$",
        speed: 80,
        upvotes: 156,
        downvotes: 8,
      },
      {
        name: "Wake Up",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
        price: "$",
        speed: 70,
        upvotes: 143,
        downvotes: 11,
      },
    ],
    coliving: [
      {
        name: "Hub53 Coliving",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
        price: "600/month",
        amenities: ["Workspace", "Pool", "Kitchen", "Events"],
        upvotes: 167,
        downvotes: 14,
      },
    ],
  },
  {
    id: "lisbon",
    city: "Lisbon",
    country: "Portugal",
    image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a",
    internetSpeed: 150,
    temperature: 22,
    cost: 2200,
    upvotes: 2156,
    downvotes: 98,
    trending: true,
    popular: false,
    description: "A vibrant European city with rich history, great weather, and a growing tech scene.",
    timezone: "UTC+1",
    expenses: {
      housing: {
        oneBedroom: 1200,
        twoBedroom: 1800,
      },
      food: {
        cheapMeal: 9,
        midRangeMeal: 25,
        coffee: 3,
        water: 1,
      },
      entertainment: {
        gym: 45,
        cinema: 8,
        beer: 3,
        cocktail: 8,
      },
      transport: {
        publicTransport: 1.5,
        taxiPerKm: 0.8,
      },
    },
    coworkingSpaces: [
      {
        name: "Second Home Lisboa",
        image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2",
        price: "300/month",
        speed: 150,
        upvotes: 312,
        downvotes: 21,
      },
    ],
    cafes: [
      {
        name: "Copenhagen Coffee Lab",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
        price: "$$",
        speed: 100,
        upvotes: 178,
        downvotes: 15,
      },
    ],
    coliving: [
      {
        name: "Selina Secret Garden",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
        price: "800/month",
        amenities: ["Workspace", "Garden", "Events", "Bar"],
        upvotes: 145,
        downvotes: 12,
      },
    ],
  },
  {
    id: "bali",
    city: "Canggu",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    internetSpeed: 80,
    temperature: 30,
    cost: 1500,
    upvotes: 1897,
    downvotes: 156,
    trending: false,
    popular: true,
    description: "Tropical paradise with beautiful beaches, rich culture, and a thriving digital nomad community.",
    timezone: "UTC+8",
    expenses: {
      housing: {
        oneBedroom: 700,
        twoBedroom: 1200,
      },
      food: {
        cheapMeal: 4,
        midRangeMeal: 15,
        coffee: 2.5,
        water: 0.5,
      },
      entertainment: {
        gym: 40,
        cinema: 7,
        beer: 3,
        cocktail: 7,
      },
      transport: {
        publicTransport: 0.7,
        taxiPerKm: 0.6,
      },
    },
    coworkingSpaces: [
      {
        name: "Dojo Bali",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        price: "250/month",
        speed: 100,
        upvotes: 423,
        downvotes: 34,
      },
    ],
    cafes: [
      {
        name: "Crate Cafe",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
        price: "$$",
        speed: 85,
        upvotes: 267,
        downvotes: 21,
      },
    ],
    coliving: [
      {
        name: "Outpost Coliving",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
        price: "700/month",
        amenities: ["Workspace", "Pool", "Events", "Cafe"],
        upvotes: 198,
        downvotes: 17,
      },
    ],
  },
];