'use client';
import Image from 'next/image';
import { AiFillCaretDown } from 'react-icons/ai';
import cart from '../assets/cart.svg';
import heart from '../assets/heart.svg';
import notif from '../assets/notif.svg';
import { usePathname } from 'next/navigation';
import { FaChevronRight } from 'react-icons/fa6';
import { FaFilter } from 'react-icons/fa';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Navbar() {
  const pathname = usePathname();
  let paths = [];
  if (pathname !== '/') {
    const path = usePathname().substring(1, usePathname().length);
    paths = path.split('/');
  } else {
    paths = ['', ''];
  }

  return (
    <div className="bg-lightbg w-[84%] fixed flex flex-col px-[30px] py-[20px] shadow-md">
      <div className="w-full flex justify-between mb-[20px]">
        <div className="flex items-center cursor-pointer">
          <span className="hover:underline text-[13px]">{paths[0]}</span>
          <FaChevronRight className=" text-[12px] mx-[3px]" />
          <span className="hover:underline text-[13px]">{paths[1]}</span>
        </div>

        <div className="flex w-[200px] justify-around items-center">
          <div className="flex items-center">
            <Image
              src={notif}
              alt="notification"
              className="h-[20px] w-[20px] text-red600"
            />
            <div className="relative h-[7px] w-[7px] bg-textgrey rounded-full right-[9px] bottom-[4px]" />
          </div>
          <Image src={heart} alt="heart" className="h-[20px] w-[20px]" />
          <Image src={cart} alt="cart" className="h-[20px] w-[20px]" />
          <div className="flex items-center">
            <div className="h-[30px] w-[30px] rounded-full bg-red600" />
            <AiFillCaretDown />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between">
        {paths[1] === 'overview' ? (
          <p className="text-[32px]">Overview</p>
        ) : (
          <p className="text-[32px]">Explore</p>
        )}

        <div className="flex">
          <Sheet>
            <SheetTrigger className="border flex items-center justify-center py-[15px] px-[20px] rounded-md">
              <p>Filters</p>
              <FaFilter />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>FILTERS</SheetTitle>
                <SheetDescription>Add Filterss</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
