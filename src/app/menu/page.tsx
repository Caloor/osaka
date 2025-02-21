'use client';

import { useState } from 'react';
import { Container, Box } from '@mui/material';
import MenuHeader from '@/components/menu/MenuHeader';
import MenuFilters from '@/components/menu/MenuFilters';
import MenuGrid from '@/components/menu/MenuGrid';
import { restaurants, menuItems } from '@/data/restaurants';

export default function MenuPage() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0].id);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = menuItems.filter(item => 
    (selectedCategory === 'all' || item.category === selectedCategory)
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <MenuHeader />
      <MenuFilters 
        selectedRestaurant={selectedRestaurant}
        setSelectedRestaurant={setSelectedRestaurant}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <MenuGrid 
        items={filteredItems}
        selectedRestaurant={selectedRestaurant}
      />
    </Container>
  );
}
