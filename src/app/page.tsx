'use client';

import Hero from '@/components/home/Hero';
import RestaurantSection from '@/components/home/RestaurantSection';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <Hero />
      <RestaurantSection />
    </Box>
  );
}
