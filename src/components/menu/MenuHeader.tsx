'use client';

import { useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function MenuHeader() {
  useEffect(() => {
    gsap.from('.menu-header-animation', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, []);

  return (
    <Box sx={{ 
      position: 'relative',
      width: '100%',
      height: { xs: '200px', sm: '300px' },
      marginBottom: { xs: 4, sm: 6 },
      overflow: 'hidden'
    }}>
      {/* Background Image */}
      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=600&fit=crop&crop=center&q=80"
          alt="Menu Header"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </Box>

      {/* Overlay */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h2" 
              component="h1" 
              className="menu-header-animation"
              sx={{
                color: 'white',
                fontSize: { xs: '2rem', sm: '3rem' },
                fontWeight: 600,
                marginBottom: 2,
                position: 'relative',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
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
              Notre Carte
            </Typography>
            <Typography 
              variant="h5" 
              className="menu-header-animation"
              sx={{
                color: 'white',
                fontSize: { xs: '1.1rem', sm: '1.5rem' },
                fontWeight: 400,
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              Découvrez nos plats signatures et spécialités
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
