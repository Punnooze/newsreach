import { MdFileUpload } from 'react-icons/md';
export default function Page() {
  return (
    <div className="w-full h-full p-[20px] ">
      <div className="p-[30px] w-full h-full bg-fe2 rounded-lg">
        <div className="flex flex-col bg-lightGrey rounded-lg p-[20px] ">
          <div className="w-[60px] h-[60px] bg-radical/30 flex items-center justify-center rounded-lg  mb-[20px]">
            <h5 className="text-contentPrimary">T</h5>
          </div>
          <div>
            <button className="flex items-center bg-red p-[10px] rounded-md text-disabled">
              <MdFileUpload className="text-[18px] mr-[15px]" />
              <p>Upload Logo</p>
            </button>
          </div>
        </div>
        <div className="mt-[30px] ">
          <div className="mb-[20px] bg-lightGrey rounded-lg p-[20px]">
            <p className="text-pS text-contentSecondary">Workspace</p>
            <input
              type="text"
              value="Team123456"
              placeholder="Enter Workspace Name..."
              className="w-[250px] p-[10px] rounded-md bg-fe border border-borderGrey "
            />
          </div>
          <div className="mb-[20px] bg-lightGrey rounded-lg p-[20px]">
            <p className="text-pS text-contentSecondary">Workspace URL</p>
            <input
              type="text"
              value="Team123456"
              disabled
              placeholder="Enter Workspace Name..."
              className="w-[250px] p-[10px] rounded-md bg-contentLight/60 text-disabled/60 border border-borderGrey "
            />
          </div>
        </div>
        <div className="bg-lightGrey p-[20px] rounded-lg">
          <button className="p-[12px] px-[30px] rounded-md bg-red text-disabled mr-[20px]">
            Save
          </button>
          <button className="p-[12px] px-[30px] rounded-md border border-red text-red">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
