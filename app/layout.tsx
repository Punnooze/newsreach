import type { Metadata } from 'next';
import './globals.css';
import { Onest } from 'next/font/google';

const onest = Onest({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-onest',
});

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Front end task for Textify AI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${onest.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
