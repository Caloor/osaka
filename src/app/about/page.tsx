'use client';

import { Container } from '@mui/material';
import AboutHero from '@/components/about/AboutHero';
import StorySection from '@/components/about/StorySection';
import TeamSection from '@/components/about/TeamSection';
import PhilosophySection from '@/components/about/PhilosophySection';
import GallerySection from '@/components/about/GallerySection';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <StorySection />
        <PhilosophySection />
        <TeamSection />
        <GallerySection />
      </Container>
    </>
  );
}
