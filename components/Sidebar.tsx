'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { IoMdTrendingUp } from 'react-icons/io';

import { MdChevronRight, MdKeyboardArrowDown } from 'react-icons/md';
import { GrProjects } from 'react-icons/gr';
import { FaPlus } from 'react-icons/fa6';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import { MdSpeed } from 'react-icons/md';
import { MdExplore } from 'react-icons/md';
import { MdOutlineKeyboardVoice } from 'react-icons/md';
import { CgInsights } from 'react-icons/cg';
import { MdOutlinePeopleOutline } from 'react-icons/md';
import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2';
import { CiSearch } from 'react-icons/ci';
import { MdOutlineCampaign } from 'react-icons/md';
import { MdOutlineInbox } from 'react-icons/md';
import { AiFillDatabase } from 'react-icons/ai';
import { IoMailUnreadOutline } from 'react-icons/io5';
import { FaRegClipboard } from 'react-icons/fa';
import { LuCircuitBoard } from 'react-icons/lu';
import { FaRegLightbulb } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiAccountCircleLine } from 'react-icons/ri';
import { FiBell } from 'react-icons/fi';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { MdOutlineStackedBarChart } from 'react-icons/md';
import logoLarge from '../assets/logo.svg';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  const path = usePathname().substring(1, usePathname().length).split('/');
  const pathname = path[path.length - 1];

  const getAccordionItemToOpen = () => {
    switch (pathname) {
      case 'overview':
      case 'explore':
      case 'data':
      case 'dashboard':
      case 'Reporter':
      case 'news':
        return 'item-1';
      case 'Settings':
      case 'General':
      case 'personal':
      case 'user':
      case 'colour':
        return 'item-2';
      default:
        return undefined;
    }
  };

  return (
    <div className=" flex flex-col justify-between shadow-md bg-fe z-50">
      <div>
        <div
          onClick={() => router.push('/')}
          className="px-[20px] py-[10px] cursor-pointer"
        >
          <Image src={logoLarge} alt="Logo" className="" />
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue={getAccordionItemToOpen()}
        >
          <AccordionItem value="item-1" className="text-textgrey">
            <AccordionTrigger className="px-[20px]">
              <div className="flex items-center text-[16px]">
                <IoMdTrendingUp className="mr-[15px] h-[20px] w-[20px]" />
                Trends
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col h-[250px] overflow-y-auto text-contentLight">
              <div className="py-[10px]"></div>
              <div className="flex items-center  py-[15px] hover:bg-lightGrey px-[20px] cursor-pointer">
                <FaPlus className="mr-[10px] h-[17px] w-[17px]" />
                New Project
              </div>
              <div className="flex items-center  py-[15px] hover:bg-lightGrey px-[20px] cursor-pointer">
                <GrProjects className="mr-[10px] h-[17px] w-[17px]" />
                Projects
              </div>
              <div className="flex items-center  py-[15px] hover:bg-lightGrey px-[20px] cursor-pointer">
                <HiOutlineBellAlert className="mr-[10px] h-[17px] w-[17px]" />
                Alerts
              </div>
              <div className="py-[15px]"></div>
              <p className="pl-[20px] text-[12px]">Online News</p>
              <div
                onClick={() => router.push('/trends/online-news/overview')}
                className={`flex items-center  py-[15px] hover:bg-lightGrey px-[20px] cursor-pointer ${
                  pathname === 'overview' ? 'text-red bg-red/5' : ''
                }`}
              >
                <MdSpeed className="mr-[10px] h-[17px] w-[17px]" />
                Overview
              </div>
              <div
                onClick={() => router.push('/trends/online-news/explore')}
                className={`flex items-center  py-[15px] hover:bg-lightGrey px-[20px] cursor-pointer ${
                  pathname === 'explore' ? 'text-red bg-red/5' : ''
                }`}
              >
                <MdExplore className="mr-[10px] h-[17px] w-[17px]" />
                Explore
              </div>
              <div className="flex items-center  py-[15px] hover:bg-lightGrey px-[20px] cursor-pointer">
                <MdOutlineKeyboardVoice className="mr-[10px] h-[17px] w-[17px]" />
                Share of Voice
              </div>
              <div className="flex items-center  py-[15px] hover:bg-lightGrey px-[20px] cursor-pointer">
                <CgInsights className="mr-[10px] h-[17px] w-[17px]" />
                Story Insights
              </div>
              <div className="flex items-center  py-[15px] hover:bg-lightGrey px-[20px] cursor-pointer">
                <MdOutlinePeopleOutline className="mr-[10px] h-[17px] w-[17px]" />
                Reporter Insights
              </div>
              <div className="py-[15px]"></div>
              <p className="pl-[20px] text-[12px]">Traffic</p>
              <div className="py-[15px]"></div>
              <p className="pl-[20px] text-[12px]">Print News</p>
              <div className="py-[15px]"></div>
              <p className="pl-[20px] text-[12px]">Add Ons</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="text-textgrey">
            <AccordionTrigger className="px-[20px]">
              <div className="flex items-center text-[16px] ">
                <HiOutlineChatBubbleLeftEllipsis className="mr-[15px] h-[20px] w-[20px]" />
                Engage
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col h-[250px] overflow-y-auto text-contentLight">
              <div className="py-[10px]"></div>
              <div className="flex items-center  py-[15px] hover:bg-lightGrey px-[20px] cursor-pointer">
                <CiSearch className="mr-[10px] h-[17px] w-[17px]" />
                Search Media
              </div>
              <div className="flex items-center  py-[15px] hover:bg-lightGrey px-[20px] cursor-pointer">
                <MdOutlineCampaign className="mr-[10px] h-[17px] w-[17px]" />
                Campaign
              </div>
              <div className="flex items-center  py-[15px] hover:bg-lightGrey px-[20px] cursor-pointer">
                <FaPlus className="mr-[10px] h-[17px] w-[17px]" />
                New Campaign
              </div>
              <div className="flex items-center  py-[15px] hover:bg-lightGrey px-[20px] cursor-pointer">
                <MdOutlineInbox className="mr-[10px] h-[17px] w-[17px]" />
                Inbox
              </div>
              <div className="flex items-center  py-[15px] hover:bg-lightGrey px-[20px] cursor-pointer">
                <AiFillDatabase className="mr-[10px] h-[17px] w-[17px]" />
                Brand Box
              </div>
              <div className="flex items-center  py-[15px] hover:bg-lightGrey px-[20px] cursor-pointer">
                <IoMailUnreadOutline className="mr-[10px] h-[17px] w-[17px]" />
                Mail Box
              </div>
              <div className="flex items-center  py-[15px] hover:bg-lightGrey px-[20px] cursor-pointer">
                <CgInsights className="mr-[10px] h-[17px] w-[17px]" />
                Analytics
              </div>
            </AccordionContent>
          </AccordionItem>
          <div
            onClick={() => router.push('/reports')}
            className={`px-[20px] text-textgrey py-[15px] hover:bg-lightGrey flex justify-between items-center border-b border-borderGrey ${
              pathname === 'reports' ? 'text-red bg-red/5' : ''
            }`}
          >
            <div className="flex items-center text-[16px] ">
              <FaRegClipboard className="mr-[15px] h-[20px] w-[20px]" />
              Reports
            </div>
            <MdChevronRight className="h-[20px] w-[20px]" />
          </div>
          <div
            onClick={() => router.push('/ai-report')}
            className={`px-[20px] text-textgrey py-[15px] hover:bg-lightGrey flex justify-between items-center border-b border-borderGrey ${
              pathname === 'ai-report' ? 'text-red bg-red/5' : ''
            }`}
          >
            <div className="flex items-center text-[16px] ">
              <LuCircuitBoard className="mr-[15px] h-[20px] w-[20px]" />
              AI Coverage Report
            </div>
            <MdChevronRight className="h-[20px] w-[20px]" />
          </div>
          <div
            onClick={() => router.push('/spotlight')}
            className={`px-[20px] text-textgrey py-[15px] hover:bg-lightGrey flex justify-between items-center border-b border-borderGrey ${
              pathname === 'spotlight' ? 'text-red bg-red/5' : ''
            }`}
          >
            <div className="flex items-center text-[16px]">
              <FaRegLightbulb className="mr-[15px] h-[20px] w-[20px]" />
              Spotlight
            </div>
            <MdChevronRight className="h-[20px] w-[20px]" />
          </div>
          <AccordionItem value="item-3" className="text-textgrey">
            <AccordionTrigger className="px-[20px]">
              <div className="flex items-center text-[16px] ">
                <IoSettingsOutline className="mr-[15px] h-[20px] w-[20px]" />
                Settings
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col h-[250px] overflow-y-auto text-contentLight">
              <div onClick={()=>router.push('/settings/general-info')} className="flex items-center  py-[15px] hover:bg-lightGrey px-[20px] cursor-pointer">
                <RiAccountCircleLine className="mr-[10px] h-[17px] w-[17px]" />
                General Info
              </div>
              <div className="flex items-center  py-[15px] hover:bg-lightGrey px-[20px] cursor-pointer">
                <FiBell className="mr-[10px] h-[17px] w-[17px]" />
                Notification
              </div>
              <div className="flex items-center  py-[15px] hover:bg-lightGrey px-[20px] cursor-pointer">
                <MdOutlinePeopleOutline className="mr-[10px] h-[17px] w-[17px]" />
                Member
              </div>
              <div className="flex items-center  py-[15px] hover:bg-lightGrey px-[20px] cursor-pointer">
                <IoInformationCircleOutline className="mr-[10px] h-[17px] w-[17px]" />
                Company Info
              </div>
              <div className="flex items-center  py-[15px] hover:bg-lightGrey px-[20px] cursor-pointer">
                <MdOutlineStackedBarChart className="mr-[10px] h-[17px] w-[17px]" />
                Subscription
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
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
