'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';

import { MdKeyboardArrowDown } from 'react-icons/md';

import logoLarge from '../assets/logo.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SidebarAccordion from './SidebarAccordion';

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className=" lg:flex flex-col justify-between shadow-md bg-fe z-50 hidden ">
      <div>
        <div
          onClick={() => router.push('/')}
          className="px-[20px] py-[10px] cursor-pointer"
        >
          <Image src={logoLarge} alt="Logo" className="" />
        </div>

        <SidebarAccordion />
      </div>
      <div className="w-full flex ">
        <Select>
          <SelectTrigger className="w-full border-t-1 border-x-0 border-b-0 border-borderGrey shadow-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none p-0 m-0 flex rounded-none h-full ">
            <div className=" h-full p-[10px] w-[25%] ">
              <div className="p-[5px] border-borderGrey border rounded-sm">
                <p className="bg-radical/40 p-[5px] rounded-sm">T</p>
              </div>
            </div>
            <div className=" h-full w-[75%] flex justify-center items-center p-[10px]   border-l-[1px] border-borderGrey">
              <div className=" p-[10px] flex w-full rounded-sm items-center justify-between border-borderGrey border">
                <p>Team123456</p>
                <MdKeyboardArrowDown />
              </div>
            </div>
          </SelectTrigger>
          <SelectContent className="bg-disabled">
            <div className="w-full p-[10px] mb-[10px]">
              <p>Select Workspace</p>
            </div>
            <SelectItem
              className="bg-contentDisable/50 text-disabled my-[5px]"
              value="ws1"
            >
              Workspace 1
            </SelectItem>
            <SelectItem
              className="bg-contentDisable/50 text-disabled my-[5px]"
              value="ws2"
            >
              Workspace 2
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
