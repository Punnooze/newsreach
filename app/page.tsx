'use client';
import homegif from '../assets/home.json';
import lottie, { AnimationItem } from 'lottie-web';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function Home() {
  const router = useRouter();
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim: AnimationItem | undefined;

    if (animationContainer.current && homegif) {
      anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: homegif,
      });
    } else {
      console.error('Animation data is not defined or container is null');
    }

    return () => {
      if (anim) anim.destroy();
    };
  }, []);

  return (
    <div className="mt-[100px] flex flex-col items-center justify-center">
      <div className="h-[500px] relative" ref={animationContainer}></div>
      <div className="absolute bottom-[100px] flex flex-col justify-center items-center">
        <h2>View your data!</h2>
        <button
          onClick={() => router.push('/trends/online-news/overview')}
          className="bg-red rounded-md p-[10px] text-disabled"
        >
          Get Started
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}
