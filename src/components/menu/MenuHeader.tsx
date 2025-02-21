'use client';

import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { gsap } from 'gsap';

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
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography 
        variant="h2" 
        component="h1" 
        className="menu-header-animation"
        sx={{
          mb: 2,
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
        Notre Carte
      </Typography>
      <Typography 
        variant="h5" 
        color="text.secondary"
        className="menu-header-animation"
      >
        Découvrez nos plats signatures et spécialités
      </Typography>
    </Box>
  );
}
