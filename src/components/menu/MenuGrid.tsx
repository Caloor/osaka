'use client';

import { Grid } from '@mui/material';
import { MenuItem } from '@/data/restaurants';
import MenuCard from './MenuCard';

interface MenuGridProps {
  items: MenuItem[];
  selectedRestaurant: number;
}
/**
 * MenuGrid component
 * 
 * @param {MenuItem[]} items - List of menu items
 * @param {number} selectedRestaurant - ID of the selected restaurant
 * 
 * @returns {JSX.Element} Grid of menu items
 */
export default function MenuGrid({ items, selectedRestaurant }: MenuGridProps) {
  return (
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <MenuCard 
            item={item}
            restaurantId={selectedRestaurant}
            index={index}
          />
        </Grid>
      ))}
    </Grid>
  );
}
