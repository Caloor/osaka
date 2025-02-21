'use client';

import { Box, ToggleButton, ToggleButtonGroup, useMediaQuery, useTheme } from '@mui/material';
import { restaurants } from '@/data/restaurants';

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'starters', label: 'Entrées' },
  { id: 'mains', label: 'Plats' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'drinks', label: 'Boissons' }
];

interface MenuFiltersProps {
  selectedRestaurant: number;
  setSelectedRestaurant: (id: number) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function MenuFilters({
  selectedRestaurant,
  setSelectedRestaurant,
  selectedCategory,
  setSelectedCategory
}: MenuFiltersProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ mb: 2 }}>
        <ToggleButtonGroup
          value={selectedRestaurant}
          exclusive
          onChange={(_, newValue) => newValue && setSelectedRestaurant(newValue)}
          aria-label="restaurant selection"
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            width: '100%',
            mb: 2
          }}
        >
          {restaurants.map((restaurant) => (
            <ToggleButton 
              key={restaurant.id} 
              value={restaurant.id}
              sx={{
                flex: 1,
                p: 2,
                '&.Mui-selected': {
                  backgroundColor: 'secondary.main',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'secondary.dark',
                  }
                }
              }}
            >
              {restaurant.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>

      <Box>
        <ToggleButtonGroup
          value={selectedCategory}
          exclusive
          onChange={(_, newValue) => newValue && setSelectedCategory(newValue)}
          aria-label="category selection"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            justifyContent: 'center'
          }}
        >
          {categories.map((category) => (
            <ToggleButton 
              key={category.id} 
              value={category.id}
              sx={{
                borderRadius: '20px !important',
                px: 3,
                '&.Mui-selected': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  }
                }
              }}
            >
              {category.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
}
