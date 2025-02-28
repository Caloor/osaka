'use client';

import { useEffect, useRef } from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { restaurants } from '@/data/restaurants';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

gsap.registerPlugin(ScrollTrigger);

const placeholderImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%25" height="100%25" viewBox="0 0 800 400"%3E%3Crect width="100%25" height="100%25" fill="%23667788"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24px" fill="%23ffffff"%3ERestaurant Image%3C/text%3E%3C/svg%3E';

const restaurantImages = [
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&h=400&fit=crop',  // Restaurant japonais
  'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=800&h=400&fit=crop',  // Sushi bar
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&h=400&fit=crop',  // Restaurant moderne
];

export default function RestaurantSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.restaurant-card');
          cards.forEach((card, index) => {
            card.classList.add('visible', `slide-up-delay-${index + 1}`);
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <Box ref={sectionRef} sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          className="section-title"
          gutterBottom
        >
          Nos Restaurants
        </Typography>

        <Typography 
          variant="body1" 
          className="section-description"
          sx={{ mb: 6 }}
        >
          Fondée en 1985 par la famille Chen, Asian Food est né d'une passion pour les saveurs authentiques de l'Asie. Ce qui a commencé comme un petit restaurant familial s'est transformé en trois établissements prestigieux, chacun célébrant la diversité de la cuisine asiatique tout en y apportant sa touche unique.
          <br /><br />
          Au fil des années, nous avons tissé des liens étroits avec des producteurs locaux et des fournisseurs à travers l'Asie, sélectionnant les meilleurs ingrédients pour créer des plats qui racontent l'histoire de notre héritage culinaire. Notre engagement envers l'excellence culinaire et l'art de l'hospitalité asiatique reste au cœur de notre philosophie.
        </Typography>

        <Grid container spacing={4}>
          {restaurants.map((restaurant, index) => (
            <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
              <Card 
                className="restaurant-card slide-up"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)'
                  }
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={restaurantImages[index % restaurantImages.length]}
                    alt={restaurant.name}
                    sx={{
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  />
                  <Box className="media-overlay" />
                </Box>

                <CardContent className="card-content" sx={{ flexGrow: 1, p: 3 }}>
                  <Typography 
                    variant="h5" 
                    component="h3"
                    sx={{ 
                      mb: 2,
                      fontWeight: 'bold',
                      color: 'text.primary'
                    }}
                  >
                    {restaurant.name}
                  </Typography>

                  <Box 
                    className="restaurant-info"
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                      color: 'text.secondary'
                    }}
                  >
                    <LocationOnIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
                    <Typography variant="body2">
                      {restaurant.location}
                    </Typography>
                  </Box>

                  <Box 
                    className="hours-info"
                    sx={{ 
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccessTimeIcon sx={{ mr: 1, fontSize: '1.2rem', color: 'primary.main' }} />
                      <Typography variant="body2" color="text.secondary">
                        Horaires d'ouverture
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ pl: 4 }}>
                      Lun-Ven: {restaurant.hours.monday}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ pl: 4 }}>
                      Week-end: {restaurant.hours.saturday}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
