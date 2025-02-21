'use client';

import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import theme from '@/styles/theme';
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ 
            bgcolor: 'background.default',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Header />
            <Box component="main" sx={{ flex: 1 }}>
              {children}
            </Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  )
}
