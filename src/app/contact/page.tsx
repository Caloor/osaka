'use client';

import { Container, Grid } from '@mui/material';
import ContactForm from '@/components/contact/ContactForm';
import LocationSection from '@/components/contact/LocationSection';
import ContactInfo from '@/components/contact/ContactInfo';

export default function ContactPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactInfo />
        </Grid>
      </Grid>
      <LocationSection />
    </Container>
  );
}
