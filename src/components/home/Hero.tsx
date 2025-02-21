'use client';

import { useEffect, useState } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { gsap } from 'gsap';

const images = [
  '/images/hero/restaurant-1.jpg',
  '/images/hero/restaurant-2.jpg',
  '/images/hero/restaurant-3.jpg'
];

const placeholderImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%25" height="100%25" viewBox="0 0 800 400"%3E%3Crect width="100%25" height="100%25" fill="%23667788"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24px" fill="%23ffffff"%3EImage placeholder%3C/text%3E%3C/svg%3E';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Animation initiale
    gsap.from('.hero-text', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Animation du fond
    gsap.to('.hero-background', {
      backgroundPosition: '50% 60%',
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: 'none'
    });

    // Changement d'image automatique
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        height: '90vh',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        className="hero-background"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          zIndex: 0,
        }}
      />
      
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container 
        maxWidth="lg"
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            color: 'white',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <Typography 
            variant="h1" 
            className="hero-text"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              marginBottom: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Une Expérience Culinaire Unique
          </Typography>
          <Typography 
            variant="h4" 
            className="hero-text"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.8rem' },
              marginBottom: 4,
              fontWeight: 300,
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            Découvrez nos trois restaurants d'exception
          </Typography>
          <Box className="hero-text">
            <Button 
              variant="contained" 
              color="secondary"
              size="large"
              href="/menu"
              sx={{
                marginRight: 2,
                padding: '12px 32px',
                fontSize: '1.1rem'
              }}
            >
              Notre Menu
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              href="/reservation"
              sx={{
                padding: '12px 32px',
                fontSize: '1.1rem',
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'secondary.main',
                  backgroundColor: 'secondary.main'
                }
              }}
            >
              Réserver
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
