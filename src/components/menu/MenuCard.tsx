'use client';

import { Box, Card, CardContent, Typography } from '@mui/material';
import { MenuItem } from '@/data/restaurants';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MenuCardProps {
  item: MenuItem;
  restaurantId: number;
  index: number;
}

export default function MenuCard({ item, restaurantId, index }: MenuCardProps) {
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'starters':
        return 'Entrée';
      case 'mains':
        return 'Plat';
      case 'desserts':
        return 'Dessert';
      default:
        return category;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="menu-card" component="article">
        <Box className="menu-card-image">
          <Image
            src={item.imageUrl}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 6}
            quality={90}
          />
          <Box className="menu-card-category">
            {getCategoryLabel(item.category)}
          </Box>
        </Box>
        
        <Box className="menu-card-overlay">
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'white',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)',
              fontStyle: 'italic'
            }}
          >
            {item.description}
          </Typography>
        </Box>

        <CardContent className="menu-card-content">
          <Typography 
            component="h3" 
            className="menu-card-title"
          >
            {item.name}
          </Typography>
          
          <Typography className="menu-card-description">
            {item.description}
          </Typography>
          
          <Typography className="menu-card-price">
            {item.prices[restaurantId].toFixed(2)}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}
