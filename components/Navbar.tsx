'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiFillCaretDown } from 'react-icons/ai';
import { FaChevronRight } from 'react-icons/fa6';
import { FaFilter } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import cart from '../assets/cart.svg';
import heart from '../assets/heart.svg';
import notif from '../assets/notif.svg';
import { useRouter, usePathname } from 'next/navigation';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
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
import { toast } from '@/hooks/use-toast';

import { Select, SelectContent, SelectTrigger } from '@/components/ui/select';
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

export default function Navbar() {
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

  useEffect(() => {
    if (value === '') {
      setValue(projects[0].value);
    }
  }, [value]);

  return (
    <div className="bg-fe w-[84%] fixed lg:flex flex-col p-[20px] px-[30px]  border-b border-borderGrey shadow-md hidden ">
      <div className="w-full flex justify-between mb-[20px]">
        <div className="flex items-center cursor-pointer">
          <span
            onClick={() => router.push('/')}
            className={`hover:underline text-md ${
              pathname === '/' ? 'hidden' : 'block'
            }`}
          >
            Home
          </span>
          <FaChevronRight
            className={` ${
              pathname === '/' ? 'hidden' : 'block'
            } text-s mx-[3px]`}
          />
          {correctedPaths[0] !== '' &&
            correctedPaths.map((path, index) => {
              if (index !== correctedPaths.length - 1) {
                return (
                  <div key={index} className="flex items-center">
                    <span className="hover:underline text-md">{path}</span>
                    <FaChevronRight className=" text-s mx-[3px]" />
                  </div>
                );
              } else {
                return (
                  <span key={index} className="hover:underline text-md">
                    {path}
                  </span>
                );
              }
            })}
        </div>

        <div className="flex w-[200px] justify-between items-center">
          <div className="flex items-center">
            <Image
              src={notif}
              alt="notification"
              className="h-[20px] w-[20px] text-red"
            />
            <div className="relative h-[8px] w-[8px] bg-radical rounded-full right-[9px] bottom-[4px]" />
          </div>

          <Image src={heart} alt="heart" className="h-[20px] w-[20px]" />
          <Image src={cart} alt="cart" className="h-[20px] w-[20px]" />
          <div className="flex items-center">
            <Select>
              <SelectTrigger className=" border-none shadow-none p-0 m-0 focus:ring-0 focus-visible:ring-0 focus-visible:outline-none ">
                <div className="h-[30px] w-[30px] rounded-full bg-red mr-[5px] text-disabled flex justify-center items-center">
                  PP
                </div>
                <AiFillCaretDown />
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
                          <span className="font-semibold">Logout</span> of your
                          account?
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
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between">
        {pathname === '/' ? (
          <p className="text-[32px]">Home</p>
        ) : (
          <p className="text-[32px]">
            {correctedPaths[correctedPaths.length - 1]}
          </p>
        )}
        {pathList.includes(correctedPaths[correctedPaths.length - 1]) && (
          <div className="flex items-center">
            <div>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <button
                    aria-expanded={open}
                    className=" justify-between flex mr-[20px] border border-borderGrey items-center p-[10px] rounded-md"
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
            <div className="flex">
              <Sheet>
                <SheetTrigger className="border flex items-center justify-center p-[10px] rounded-md border-borderGrey">
                  <p className="mr-[5px]">Filters</p>
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
        )}
      </div>
    </div>
  );
}
