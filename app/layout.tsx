import type { Metadata } from 'next';
import './globals.css';
import { Onest } from 'next/font/google';
import Sidebar from '@/components/Sidebar';

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
        className={`${onest.variable} grid grid-cols-6 w-[100vw] h-[100vh] overflow-x-hidden bg-lightbg `}
      >
        <Sidebar />
        <div className="col-span-5 overflow-y-auto bg-greybg">{children}</div>
      </body>
    </html>
  );
}
