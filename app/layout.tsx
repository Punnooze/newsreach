import type { Metadata } from 'next';
import './globals.css';
import { Onest } from 'next/font/google';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import TopBar from '@/components/TopBar';

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
        className={`${onest.variable} grid grid-cols-6 w-[100vw] h-[100vh] overflow-x-hidden bg-lightGrey text-contentPrimary`}
      >
        <Sidebar />
        <div className="col-span-6 lg:col-span-5 overflow-y-auto bg-lightGrey h-[100vh] flex flex-col text-contentPrimary">
          <Navbar />
          <TopBar />
          <div className='mt-[50px] lg:mt-[150px]'>
          {children}
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
