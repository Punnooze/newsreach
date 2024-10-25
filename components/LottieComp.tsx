'use client';

import Lottie from 'lottie-react';
import homeanim from '../assets/home.json';

export default function LottieComp() {
  return <Lottie animationData={homeanim} loop={true} className="h-[500px]" />;
}
