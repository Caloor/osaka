'use client';

import { Box, Typography, Container } from '@mui/material';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <Box sx={{ 
      position: 'relative',
      height: { xs: '300px', md: '400px' },
      width: '100%',
      overflow: 'hidden'
    }}>
      <Image
        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&h=800&fit=crop&crop=center&q=80"
        alt="Restaurant Interior"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover' }}
      />
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4))',
        display: 'flex',
        alignItems: 'center',
      }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h1" 
            sx={{
              color: 'white',
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 600,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              maxWidth: '800px'
            }}
          >
            Notre Histoire
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
