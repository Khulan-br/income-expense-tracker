import { HouseLogo } from "@/components/icon/HouseLogo";


export const RecordList = () => {
  return (
    <div className="flex justify-between items-center h-[40] py-[20px] mx-6 border-b-[1px]">
      <div className="flex items-center gap-4">
        <HouseLogo />
        <div>
          <h1>Lending & Renting</h1>
          <p>3 hours ago</p>
        </div>
      </div>
      <p>3000$</p>
    </div>
  );
};

export default RecordList;
