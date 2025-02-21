'use client';

import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  useEffect(() => {
    gsap.from('.footer-animation', {
      scrollTrigger: {
        trigger: '.footer-animation',
        start: 'top bottom',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
      className="footer-animation"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Nos Restaurants
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Le Bistrot Parisien
              <br />
              L'Atelier Gourmand
              <br />
              Le Jardin Secret
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Navigation
            </Typography>
            <Link href="/about" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" color="text.secondary">À propos</Typography>
            </Link>
            <Link href="/menu" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" color="text.secondary">Menu</Typography>
            </Link>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" color="text.secondary">Contact</Typography>
            </Link>
            <Link href="/reservation" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" color="text.secondary">Réservation</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Suivez-nous
            </Typography>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                mr: 1,
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.1)' }
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.1)' }
              }}
            >
              <FacebookIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 4 }}
        >
          © {new Date().getFullYear()} Tous droits réservés
        </Typography>
      </Container>
    </Box>
  );
}
