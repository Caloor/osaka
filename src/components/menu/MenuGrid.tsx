'use client';

import { useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MenuItem } from '@/data/restaurants';

gsap.registerPlugin(ScrollTrigger);

const placeholderImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%25" height="100%25" viewBox="0 0 800 400"%3E%3Crect width="100%25" height="100%25" fill="%23667788"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24px" fill="%23ffffff"%3EDish Image%3C/text%3E%3C/svg%3E';

interface MenuGridProps {
  items: MenuItem[];
  selectedRestaurant: number;
}

export default function MenuGrid({ items, selectedRestaurant }: MenuGridProps) {
  useEffect(() => {
    const cards = document.querySelectorAll('.menu-item-card');
    
    gsap.from(cards, {
      scrollTrigger: {
        trigger: cards[0],
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out'
    });
  }, [items]);

  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card 
            className="menu-item-card"
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 6
              }
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={item.imageUrl || placeholderImage}
              alt={item.name}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h6" component="h3">
                {item.name}
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{ mb: 2, minHeight: '40px' }}
              >
                {item.description}
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'flex-end',
                alignItems: 'center'
              }}>
                <Typography 
                  variant="h6" 
                  color="primary"
                  sx={{ 
                    fontWeight: 'bold',
                    '&::before': {
                      content: '"€"',
                      marginRight: '2px',
                      fontSize: '0.8em',
                      verticalAlign: 'top'
                    }
                  }}
                >
                  {item.prices[selectedRestaurant].toFixed(2)}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
