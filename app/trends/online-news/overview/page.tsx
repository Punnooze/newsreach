import BarChart from '@/components/BarChart';

export default function Page() {
  return (
    <div className="w-full h-full p-[20px]  flex flex-col gap-[20px]">
      <div className="bg-fe2 rounded-md p-[20px] h-[400px] shadow-md">
        News Volume
        <BarChart />
      </div>
      <div className="bg-fe2 rounded-md p-[20px] h-[400px] shadow-md">
        Headline Volume
      </div>
    </div>
  );
}
