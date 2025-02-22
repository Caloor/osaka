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
    name: "Osaka Teppanyaki",
    location: "15 rue de la Paix, Paris",
    contact: {
      phone: "+33 1 23 45 67 89",
      email: "bistrot-paris@example.com"
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
    name: "L'Atelier Gourmand",
    location: "45 avenue des Champs-Élysées, Paris",
    contact: {
      phone: "+33 1 98 76 54 32",
      email: "atelier@example.com"
    },
    hours: {
      monday: "11:30 - 22:30",
      tuesday: "11:30 - 22:30",
      wednesday: "11:30 - 22:30",
      thursday: "11:30 - 22:30",
      friday: "11:30 - 23:30",
      saturday: "11:30 - 23:30",
      sunday: "11:30 - 22:00"
    }
  },
  {
    id: 3,
    name: "Le Jardin Secret",
    location: "8 place Vendôme, Paris",
    contact: {
      phone: "+33 1 34 56 78 90",
      email: "jardin-secret@example.com"
    },
    hours: {
      monday: "12:00 - 21:30",
      tuesday: "12:00 - 21:30",
      wednesday: "12:00 - 21:30",
      thursday: "12:00 - 21:30",
      friday: "12:00 - 22:30",
      saturday: "12:00 - 22:30",
      sunday: "12:00 - 21:00"
    }
  }
];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Soupe à l'Oignon Gratinée",
    description: "Une soupe traditionnelle française mijotée pendant des heures, garnie de croûtons dorés et de fromage gratiné fondant",
    imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
    prices: {
      1: 12.50,
      2: 13.50,
      3: 14.00
    },
    category: "starters"
  },
  {
    id: 2,
    name: "Foie Gras Maison",
    description: "Foie gras mi-cuit fait maison, accompagné de pain brioché toasté et de chutney de figues",
    imageUrl: "https://images.unsplash.com/photo-158396420710-8e63095cb70f?w=800&q=80",
    prices: {
      1: 23.50,
      2: 24.50,
      3: 25.00
    },
    category: "starters"
  },
  {
    id: 3,
    name: "Coq au Vin",
    description: "Coq mijoté dans un vin rouge d'exception avec lardons fumés, champignons de Paris et petits oignons",
    imageUrl: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=800&q=80",
    prices: {
      1: 24.50,
      2: 26.50,
      3: 27.00
    },
    category: "mains"
  },
  {
    id: 4,
    name: "Filet de Bœuf Rossini",
    description: "Filet de bœuf français, escalope de foie gras poêlée, sauce au truffe et pommes duchesse",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    prices: {
      1: 34.50,
      2: 36.50,
      3: 38.00
    },
    category: "mains"
  },
  {
    id: 5,
    name: "Crème Brûlée à la Vanille",
    description: "Crème onctueuse à la vanille de Madagascar, caramélisée à la minute",
    imageUrl: "https://images.unsplash.com/photo-1579372786545-d23b37f6a363?w=800&q=80",
    prices: {
      1: 9.50,
      2: 10.50,
      3: 11.00
    },
    category: "desserts"
  },
  {
    id: 6,
    name: "Tarte Tatin",
    description: "Tarte aux pommes caramélisées servie tiède avec crème fraîche d'Isigny",
    imageUrl: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a7?w=800&q=80",
    prices: {
      1: 10.50,
      2: 11.50,
      3: 12.00
    },
    category: "desserts"
  },
  {
    id: 7,
    name: "Sélection de Vins",
    description: "Notre carte des vins raffinée, sélectionnée par notre sommelier",
    imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
    prices: {
      1: 8.50,
      2: 9.50,
      3: 10.00
    },
    category: "drinks"
  }
];
