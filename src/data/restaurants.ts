export interface Restaurant {
  id: number;
  name: string;
  location: string;
  contact: {
    phone: string;
    email: string;
  };
  hours: {
    [key: string]: string;
  };
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  prices: {
    [key: number]: number; // restaurantId: price
  };
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Asian Food - Teppanyaki",
    location: "15 rue de la Paix, Paris",
    contact: {
      phone: "+33 1 23 45 67 89",
      email: "asian-food-paris@example.com"
    },
    hours: {
      monday: "12:00 - 22:00",
      tuesday: "12:00 - 22:00",
      wednesday: "12:00 - 22:00",
      thursday: "12:00 - 22:00",
      friday: "12:00 - 23:00",
      saturday: "12:00 - 23:00",
      sunday: "12:00 - 21:00"
    }
  },
  {
    id: 2,
    name: "Asian Food - Fusion",
    location: "45 avenue des Champs-Élysées, Paris",
    contact: {
      phone: "+33 1 98 76 54 32",
      email: "asian-food-champs@example.com"
    },
    hours: {
      monday: "12:00 - 22:00",
      tuesday: "12:00 - 22:00",
      wednesday: "12:00 - 22:00",
      thursday: "12:00 - 22:00",
      friday: "12:00 - 23:00",
      saturday: "12:00 - 23:00",
      sunday: "12:00 - 21:00"
    }
  },
  {
    id: 3,
    name: "Asian Food - Street Food",
    location: "8 rue du Commerce, Paris",
    contact: {
      phone: "+33 1 45 67 89 01",
      email: "asian-food-commerce@example.com"
    },
    hours: {
      monday: "11:30 - 22:00",
      tuesday: "11:30 - 22:00",
      wednesday: "11:30 - 22:00",
      thursday: "11:30 - 22:00",
      friday: "11:30 - 23:00",
      saturday: "11:30 - 23:00",
      sunday: "11:30 - 21:00"
    }
  }
];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Gyoza Signature",
    description: "Raviolis japonais grillés aux légumes et poulet, sauce ponzu maison",
    imageUrl: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=600&q=80",
    prices: { 1: 8.50, 2: 8.50, 3: 7.50 },
    category: "starters"
  },
  {
    id: 2,
    name: "Spring Rolls Vietnam",
    description: "Rouleaux de printemps frais aux crevettes, herbes aromatiques et sauce cacahuète",
    imageUrl: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=600&q=80",
    prices: { 1: 9.00, 2: 9.00, 3: 8.00 },
    category: "starters"
  },
  {
    id: 3,
    name: "Dim Sum Collection",
    description: "Assortiment de dim sum vapeur (crevettes, porc, légumes)",
    imageUrl: "https://images.unsplash.com/photo-1515669097368-22e68427d265?w=600&q=80",
    prices: { 1: 10.50, 2: 10.50, 3: 9.50 },
    category: "starters"
  },
  {
    id: 4,
    name: "Pad Thai Signature",
    description: "Nouilles de riz sautées aux crevettes, tofu, cacahuètes et sauce tamarin maison",
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&q=80",
    prices: { 1: 16.90, 2: 16.90, 3: 15.90 },
    category: "mains"
  },
  {
    id: 5,
    name: "Bœuf Teppanyaki",
    description: "Bœuf Black Angus grillé avec légumes croquants et sauce teriyaki",
    imageUrl: "https://images.unsplash.com/photo-1623341214825-7f586b20e936?w=600&q=80",
    prices: { 1: 22.90, 2: 22.90, 3: 20.90 },
    category: "mains"
  },
  {
    id: 6,
    name: "Curry Rouge Thai",
    description: "Curry rouge au lait de coco, poulet fermier et légumes de saison",
    imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80",
    prices: { 1: 18.90, 2: 18.90, 3: 17.90 },
    category: "mains"
  },
  {
    id: 7,
    name: "Mochi Glacés Assortis",
    description: "Sélection de mochis glacés (matcha, mangue, sésame noir)",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
    prices: { 1: 8.90, 2: 8.90, 3: 7.90 },
    category: "desserts"
  },
  {
    id: 8,
    name: "Perles de Coco",
    description: "Perles de tapioca au lait de coco et mangue fraîche",
    imageUrl: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=600&q=80",
    prices: { 1: 7.90, 2: 7.90, 3: 6.90 },
    category: "desserts"
  },
  {
    id: 9,
    name: "Matcha Cheesecake",
    description: "Cheesecake au thé vert matcha, coulis de fruits rouges",
    imageUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
    prices: { 1: 8.50, 2: 8.50, 3: 7.50 },
    category: "desserts"
  }
];
