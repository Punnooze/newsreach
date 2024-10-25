'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const LottieComp = dynamic(() => import('@/components/LottieComp'), {
  ssr: false,
});

export default function Home() {
  const router = useRouter();
  return (
    <div className="mt-[100px] flex flex-col items-center justify-center">
      <LottieComp />
      <div className="absolute bottom-[100px] flex flex-col justify-center items-center">
        <h2>View your data!</h2>
        <button
          onClick={() => router.push('/trends/online-news/overview')}
          className="bg-red rounded-md p-[10px] text-disabled"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
