'use client';
import { useState } from 'react';

function Page() {
  const [state, setState] = useState('plan');
  return (
    <div className="w-full h-full p-[20px] ">
      <div className="p-[30px] w-full h-full bg-fe2 rounded-lg flex flex-col">
        <div className="flex pl-[20px] ">
          <button
            onClick={() => setState('plan')}
            className={`text-contentSecondary text-pL mr-[10px] md:mr-[20px] p-[10px] pb-0 rounded-md ${
              state === 'plan' ? 'bg-lightGrey  underline font-bold' : ''
            }`}
          >
            PLAN
          </button>
          <button
            onClick={() => setState('invoice')}
            className={`text-contentSecondary  text-pL mr-[10px] md:mr-[20px] p-[10px] pb-0 rounded-md ${
              state === 'invoice' ? 'bg-lightGrey  underline font-bold' : ''
            }`}
          >
            INVOICE
          </button>
          <button
            onClick={() => setState('history')}
            className={`text-contentSecondary  text-pL mr-[10px] md:mr-[20px] p-[10px] pb-0 rounded-md ${
              state === 'history' ? 'bg-lightGrey  underline font-bold' : ''
            }`}
          >
            HISTORY
          </button>
        </div>
        {state === 'plan' ? (
          <div className="bg-lightGrey p-[20px] rounded-md">
            <div className="w-full grid md:grid-cols-2 gap-[30px]">
              <div className="border border-borderGrey p-[20px] rounded-lg">
                <p className="text-contentSecondary text-[15px] mb-[10px]">
                  Current Plan
                </p>
                <p className="font-semibold mb-[30px]">Free</p>

                <div className="flex justify-between">
                  <div className='mr-[20px]'>
                    <p className="text-contentSecondary text-[15px] mb-[10px]">
                      Next Payment Data :
                    </p>
                    <p className="font-semibold">-</p>
                  </div>
                  <button className="p-[10px] bg-red md:px-[20px] text-disabled rounded-lg">
                    Upgrade <span className="hidden md:block">Now</span>
                  </button>
                </div>
              </div>
              <div className="border border-borderGrey p-[20px] rounded-lg">
                <div>
                  <p className="text-contentSecondary text-[15px] mb-[10px]">
                    Plan Activation Date
                  </p>
                  <p className="font-semibold mb-[30px]">Date</p>
                </div>
                <div>
                  <p className="text-contentSecondary text-[15px] mb-[10px]">
                    Location
                  </p>
                  <p className="font-semibold">India</p>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 mt-[20px] p-[20px] border border-borderGrey rounded-lg">
              <div>
                <div>
                  <p className="text-contentSecondary text-[15px] mb-[10px]">
                    Campaigns
                  </p>
                  <p className="font-semibold">-</p>
                </div>
                <div>
                  <p className="text-contentSecondary text-[15px] mb-[10px]">
                    Data History
                  </p>
                  <p className="font-semibold">1 Month</p>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-contentSecondary text-[15px] mb-[10px]">
                    Projects
                  </p>
                  <p className="font-semibold">1/1</p>
                </div>
                <div>
                  <p className="text-contentSecondary text-[15px] mb-[10px]">
                    Platform Support
                  </p>
                  <p className="font-semibold">No manager</p>
                </div>
              </div>
            </div>
          </div>
        ) : state === 'invoice' ? (
          <div className="bg-lightGrey p-[20px] rounded-md">
            <div className="mb-[30px]">
              <p className="font-semibold text-pL mb-[10px] text-contentSecondary">
                PENDING INVOICE
              </p>
              <div className="bg-borderGrey h-[1px] w-full mb-[20px] " />
              <p className="text-secondary-foreground text-[15px]">
                You have no pending Invoice...
              </p>
            </div>
            <div className="min-h-[200px]">
              <p className="font-semibold text-pL mb-[10px] text-contentSecondary">
                PAST INVOICE
              </p>
              <div className="bg-borderGrey h-[1px] w-full mb-[20px] " />
              <p className="text-secondary-foreground text-[15px]">
                You have no past Invoice...
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-lightGrey p-[20px] rounded-md min-h-[400px]">
            <p className="text-pL font-semibold text-contentSecondary mb-[10px]">
              YOUR SUBSCRIPTION HISTORY
            </p>
            <div className="bg-borderGrey h-[1px] w-full mb-[20px] " />
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
