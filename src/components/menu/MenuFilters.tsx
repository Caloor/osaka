'use client';

import { Box, ToggleButton, ToggleButtonGroup, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { restaurants } from '@/data/restaurants';

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'starters', label: 'Entrées' },
  { id: 'mains', label: 'Plats' },
  { id: 'desserts', label: 'Desserts' }
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
    <Box 
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      sx={{ 
        mb: 6,
        px: { xs: 2, sm: 4 }
      }}
    >
      <Box sx={{ mb: 3 }}>
        <ToggleButtonGroup
          value={selectedRestaurant}
          exclusive
          onChange={(_, newValue) => newValue && setSelectedRestaurant(newValue)}
          aria-label="restaurant selection"
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            width: '100%',
            gap: 2,
            '& .MuiToggleButton-root': {
              flex: 1,
              borderRadius: '16px !important',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease',
              backgroundColor: 'white',
              color: 'text.primary',
              textTransform: 'none',
              p: 2,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.02)',
                borderColor: 'rgba(0, 0, 0, 0.12)',
              },
              '&.Mui-selected': {
                backgroundColor: '#c41e3a',
                color: 'white',
                borderColor: '#c41e3a',
                '&:hover': {
                  backgroundColor: '#a01830',
                  borderColor: '#a01830',
                }
              }
            }
          }}
        >
          {restaurants.map((restaurant) => (
            <ToggleButton 
              key={restaurant.id} 
              value={restaurant.id}
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
          aria-label="category filter"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 1.5,
            '& .MuiToggleButton-root': {
              borderRadius: '30px !important',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.03)',
              transition: 'all 0.3s ease',
              backgroundColor: 'white',
              color: 'text.primary',
              textTransform: 'none',
              px: 3,
              py: 1,
              fontSize: '0.95rem',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.02)',
                borderColor: 'rgba(0, 0, 0, 0.12)',
              },
              '&.Mui-selected': {
                backgroundColor: '#c41e3a',
                color: 'white',
                borderColor: '#c41e3a',
                '&:hover': {
                  backgroundColor: '#a01830',
                  borderColor: '#a01830',
                }
              }
            }
          }}
        >
          {categories.map((category) => (
            <ToggleButton 
              key={category.id} 
              value={category.id}
            >
              {category.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
}
