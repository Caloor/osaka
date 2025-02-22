'use client';

import { Box, Typography, Container, Button } from '@mui/material';
import Head from 'next/head';

const heroImage = 'https://images.unsplash.com/photo-1511018556340-d16986a1c194?q=80&w=2000&auto=format&fit=crop';

export default function Hero() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href={heroImage} />
        <style>
          {`
            .fade-in-up {
              opacity: 0;
              transform: translateY(100px);
              animation: fadeInUp 1s ease-out forwards;
            }

            .delay-1 {
              animation-delay: 0.2s;
            }

            .delay-2 {
              animation-delay: 0.4s;
            }

            .delay-3 {
              animation-delay: 0.6s;
            }

            @keyframes fadeInUp {
              0% {
                opacity: 0;
                transform: translateY(100px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
      </Head>
      <Box
        sx={{
          position: 'relative',
          height: '90vh',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 2,
            color: 'white',
          }}
        >
          <Typography
            variant="h1"
            className="fade-in-up delay-1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            Une Expérience Culinaire Unique
          </Typography>
          <Typography
            variant="h2"
            className="fade-in-up delay-2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              mb: 4,
              maxWidth: '800px',
            }}
          >
            Découvrez l'art du Teppanyaki dans une ambiance raffinée et chaleureuse
          </Typography>
          <Box className="fade-in-up delay-3">
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/menu"
              sx={{
                mr: 2,
                fontSize: '1.1rem',
                py: 1.5,
                px: 4,
              }}
            >
              Découvrir Notre Carte
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              href="/contact"
              sx={{
                fontSize: '1.1rem',
                py: 1.5,
                px: 4,
              }}
            >
              Réserver une Table
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
