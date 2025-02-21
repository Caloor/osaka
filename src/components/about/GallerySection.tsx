'use client';

import { Box, Typography, ImageList, ImageListItem } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

const galleryItems = [
  {
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&q=80',
    title: 'Restaurant Interior'
  },
  {
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&q=80',
    title: 'Fine Dining Setup'
  },
  {
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop&q=80',
    title: 'Dining Area'
  },
  {
    img: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&h=600&fit=crop&q=80',
    title: 'Wine Cellar'
  },
  {
    img: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?w=800&h=600&fit=crop&q=80',
    title: 'Private Dining'
  },
  {
    img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop&q=80',
    title: 'Outdoor Seating'
  }
];

export default function GallerySection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ my: 8 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
        Notre Établissement
      </Typography>
      <ImageList 
        variant="masonry" 
        cols={isMobile ? 1 : 3} 
        gap={16}
        sx={{
          mb: 8,
          '& .MuiImageListItem-root': {
            overflow: 'hidden',
            '& img': {
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }
          }
        }}
      >
        {galleryItems.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: '8px',
                width: '100%',
                height: 'auto'
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
