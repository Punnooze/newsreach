'use client';
import logo from '../assets/logo-small.svg';
import menu from '../assets/menu.svg';
import notif from '../assets/notif.svg';
import heart from '../assets/heart.svg';
import cart from '../assets/cart.svg';
import logoBig from '../assets/logo.svg';
import close from '../assets/close.svg';
import Image from 'next/image';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import { FaFilter } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import SidebarAccordion from './SidebarAccordion';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import * as React from 'react';
import { ChevronsUpDown } from 'lucide-react';
const projects = [
  {
    value: 'team123456',
    label: 'Team123456',
  },
  {
    value: 'team1234',
    label: 'Team1234',
  },
];

const pathList = ['Overview'];

export default function TopBar() {
  const router = useRouter();
  const pathname = usePathname();
  const paths = pathname !== '/' ? pathname.substring(1).split('/') : ['', ''];
  const correctedPaths = paths.map((path) =>
    path
      .replace('-', ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  );
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('team123456');

  return (
    <div className="bg-fe lg:hidden px-[20px] py-[10px] z-50 fixed w-full border border-x-0 border-t-0 border-borderGrey shadow-md flex flex-col">
      <div className=" flex  w-full justify-between ">
        <Image
          onClick={() => router.push('/')}
          src={logo}
          alt="logo"
          className="cursor-pointer md:hidden"
        />
        <Image
          onClick={() => router.push('/')}
          src={logoBig}
          alt="logo"
          className="cursor-pointer hidden md:block"
        />
        {pathList.includes(correctedPaths[correctedPaths.length - 1]) && (
          <div className="md:hidden">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <button
                  aria-expanded={open}
                  className=" justify-between flex mr-[20px] border border-borderGrey items-center p-[7px] rounded-md text-pS"
                >
                  {value
                    ? projects.find((project) => project.value === value)
                        ?.label + ' insights'
                    : 'Select project'}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0 bg-disabled">
                <Command>
                  <CommandInput placeholder="Search project..." />
                  <CommandList>
                    <CommandEmpty>No project found.</CommandEmpty>
                    <CommandGroup>
                      {projects.map((project) => (
                        <CommandItem
                          key={project.value}
                          value={project.value}
                          className="bg-contentDisable/30 text-contentPrimary mt-[5px]"
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? '' : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          {project.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        )}
        <div className="flex gap-[10px]">
          <div className="flex items-center relative hover:bg-red/20 p-[7px] px-[10px] rounded-full">
            <Image
              src={notif}
              alt="notif"
              className="cursor-pointer w-[16px]"
            />
            <div className="absolute bg-radical h-[8px] w-[8px] rounded-full right-[10px] top-[10px]" />
          </div>
          <div className="flex items-center hover:bg-red/20 p-[7px] px-[10px] rounded-full">
            <Image
              src={heart}
              alt="heart"
              className="cursor-pointer w-[18px] "
            />
          </div>
          <div className="flex items-center hover:bg-red/20 p-[7px] px-[9px] rounded-full">
            <Image src={cart} alt="cart" className="cursor-pointer w-[18px]" />
          </div>

          <Sheet>
            <SheetTrigger className="flex items-center hover:bg-red/20 p-[7px] px-[9px] rounded-full">
              <Image
                src={menu}
                alt="menu"
                className="cursor-pointer w-[18px]"
              />
            </SheetTrigger>
            <SheetContent className="p-0 flex flex-col bg-disabled w-[250px] h-[100vh] overflow-y-auto justify-between ">
              <div>
                <div className="p-[10px] w-full flex justify-around items-center">
                  <Image src={logoBig} alt="logo" />
                  <SheetTrigger>
                    <Image src={close} alt="close" />
                  </SheetTrigger>
                </div>
                <div className="w-full flex ">
                  <Select>
                    <SelectTrigger className="w-full border border-borderGrey shadow-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none p-0 m-0 flex rounded-none h-full ">
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
                <SidebarAccordion />
              </div>
              <Select>
                <SelectTrigger className="shadow-none m-0 focus:ring-0 focus-visible:ring-0 focus-visible:outline-none w-full  rounded-none p-[20px] py-[40px]  border border-x-0 border-b-0 border-borderGrey ">
                  <div className="flex border border-borderGrey w-full p-[10px] rounded-md">
                    <div className="w-[40px] h-[40px] rounded-full bg-red mr-[5px] text-disabled flex justify-center items-center">
                      <p>PP</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-s">Punnoose Punnen</p>
                      <p className="text-xs">Account Settings</p>
                    </div>
                  </div>
                </SelectTrigger>
                <SelectContent className="rounded-sm shadow-md bg-disabled p-[10px]">
                  <p className="w-[300px] text-[20px] text-contentSecondary my-[20px]">
                    Personal Information
                  </p>
                  <div className="flex mb-[20px]">
                    <div className="bg-radical/40 flex items-center justify-center w-[40px] rounded-md mr-[10px]">
                      <p className="text-pS">PP</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-md text-contentSecondary">
                        Punnoose Punnen
                      </p>
                      <p className="text-s text-contentLight">
                        punnoosepunnen11@gmail.com
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => router.push('/settings/general-info')}
                    className="bg-lightGrey p-[10px] pr-[14px] rounded-md flex justify-between items-center w-full text-md text-contentSecondary hover:bg-contentDisable hover:text-lightGrey duration-100 mb-[10px]"
                  >
                    <p className="text-md">Profile Settings</p>
                    <FaChevronRight />
                  </button>
                  <button className="w-full">
                    <AlertDialog>
                      <AlertDialogTrigger className="bg-lightGrey p-[10px]  rounded-md flex justify-between items-center w-full  text-contentSecondary hover:bg-contentDisable hover:text-lightGrey duration-100">
                        <p className="text-[15px] font-semibold">Logout</p>
                        <IoLogOutOutline className="text-[18px]" />
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle className="text-contentPrimary font-semibold">
                            Are you sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to{' '}
                            <span className="font-semibold">Logout</span> of
                            your account?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction className="bg-red hover:bg-red/80">
                            <button
                              onClick={() => {
                                toast({
                                  title: 'Logged out',
                                  description:
                                    'You have been successfully logged out',
                                });
                              }}
                            >
                              Logout
                            </button>
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </button>
                </SelectContent>
              </Select>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="flex justify-between items-center mt-[20px]">
        {pathname === '/' ? (
          <p className="text-[32px]">Home</p>
        ) : (
          <p className="text-[32px]">
            {correctedPaths[correctedPaths.length - 1]}
          </p>
        )}
        {pathList.includes(correctedPaths[correctedPaths.length - 1]) && (
          <div className="flex items-center">
            <div className="mr-[20px] hidden md:block">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <button
                    aria-expanded={open}
                    className=" justify-between flex mr-[20px] border border-borderGrey items-center p-[10px] rounded-md text-pS"
                  >
                    {value
                      ? projects.find((project) => project.value === value)
                          ?.label + ' insights'
                      : 'Select project'}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0 bg-disabled">
                  <Command>
                    <CommandInput placeholder="Search project..." />
                    <CommandList>
                      <CommandEmpty>No project found.</CommandEmpty>
                      <CommandGroup>
                        {projects.map((project) => (
                          <CommandItem
                            key={project.value}
                            value={project.value}
                            className="bg-contentDisable/30 text-contentPrimary mt-[5px]"
                            onSelect={(currentValue) => {
                              setValue(
                                currentValue === value ? '' : currentValue
                              );
                              setOpen(false);
                            }}
                          >
                            {project.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <Sheet>
              <SheetTrigger className="border flex items-center justify-center p-[5px] md:p-[10px] rounded-md border-borderGrey">
                <p className="mr-[5px]">Filters</p>
                <FaFilter className="text-pS " />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>FILTERS</SheetTitle>
                  <SheetDescription>Add Filterss</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </div>
  );
}
