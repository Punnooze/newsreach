import { CiLock } from 'react-icons/ci';
export default function Disabled() {
  return (
    <div className="absolute h-full w-full left-0 top-0 bg-fe2/70 p-[20px] flex items-center justify-center">
      <div className=" p-[100px] rounded-md  shadow-sm flex  flex-col justify-center items-center">
        <CiLock className="text-[48px] text-red " />
        <p className="text-[24px] mt-[20px]">Upgrade to view this page</p>
        <p>Get detailed insights</p>
        <button className="bg-red px-[10px] p-[5px] rounded-md mt-[25px] text-white">
          Upgrade Now
        </button>
      </div>
    </div>
  );
}
