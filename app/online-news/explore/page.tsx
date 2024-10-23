import { CiLock } from 'react-icons/ci';
export default function page() {
  return (
    <div className="w-full h-full p-[20px] mt-[150px] flex flex-col gap-[20px] ">
      <div className="bg-lightbg rounded-md p-[20px] h-[400px] shadow-md">
        News Volume
      </div>
      <div className="bg-lightbg rounded-md p-[20px] h-[400px] shadow-md">
        Headline Volume
      </div>
      <div className="absolute h-full w-full left-0 top-0 bg-white/70 p-[20px] flex items-center justify-center">
        <div className=" p-[100px] rounded-md  shadow-sm flex  flex-col justify-center items-center">
          <CiLock className="text-[48px] text-red600 " />
          <p className="text-[24px] mt-[20px]">Upgrade to view this page</p>
          <p>Get detailed insights</p>
          <button className="bg-red600 px-[10px] p-[5px] rounded-md mt-[25px] text-white">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
}
