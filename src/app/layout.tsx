import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import './globals.css';

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto-flex',
  display: 'swap',
  weight: ['300', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Muscle Memory - Simplify Those Exercises',
  description:
    'Discover targeted exercises and workouts for every muscle group. Build strength, muscle, and fitness with our comprehensive workout guides.',
  keywords: [
    'fitness',
    'workout',
    'muscle building',
    'exercise',
    'strength training',
  ],
  authors: [{ name: 'Jeffrey Ko' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/images/ui/logos/logo.png',
    shortcut: '/images/ui/logos/logo.png',
    apple: '/images/ui/logos/logo.png',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' className={robotoFlex.variable}>
      <body className={`${robotoFlex.className} antialiased`}>{children}</body>
    </html>
  );
}
