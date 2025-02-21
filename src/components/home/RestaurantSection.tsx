'use client';

import { useEffect } from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { restaurants } from '@/data/restaurants';

gsap.registerPlugin(ScrollTrigger);

const placeholderImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%25" height="100%25" viewBox="0 0 800 400"%3E%3Crect width="100%25" height="100%25" fill="%23667788"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24px" fill="%23ffffff"%3ERestaurant Image%3C/text%3E%3C/svg%3E';

export default function RestaurantSection() {
  useEffect(() => {
    const cards = document.querySelectorAll('.restaurant-card');
    
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        ease: 'power3.out'
      });
    });
  }, []);

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            mb: 6,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '3px',
              backgroundColor: 'secondary.main'
            }
          }}
        >
          Nos Restaurants
        </Typography>

        <Grid container spacing={4}>
          {restaurants.map((restaurant) => (
            <Grid item xs={12} md={4} key={restaurant.id}>
              <Card 
                className="restaurant-card"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={placeholderImage}
                  alt={restaurant.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {restaurant.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {restaurant.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Horaires:</strong>
                    <br />
                    Lun-Ven: {restaurant.hours.monday}
                    <br />
                    Week-end: {restaurant.hours.saturday}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
