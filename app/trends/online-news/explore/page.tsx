import Disabled from '@/components/Disabled';

export default function Page() {
  return (
    <div className="w-full h-full p-[20px] mt-[150px] flex flex-col gap-[20px] ">
      <div className="bg-lightbg rounded-md p-[20px] h-[400px] shadow-md">
        News Volume
      </div>
      <div className="bg-lightbg rounded-md p-[20px] h-[400px] shadow-md">
        Headline Volume
      </div>
      <Disabled />
    </div>
  );
}
