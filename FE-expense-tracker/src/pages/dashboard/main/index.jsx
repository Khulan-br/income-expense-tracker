import Layout from "@/components/layout";
import Cards from "../cards";
import RecordList from "../recordlist";
import Chart from "../charts";




const Dashboard = () => {
  return (
    <Layout>
      <Cards />
      <div className="grid grid-cols-2 gap-6 h-[284px]">
        <Chart className="bg-blue-400 rounded-[18px]"/>
        {/* <div className="bg-blue-400 rounded-[18px]"></div>
        <div className="bg-blue-400 rounded-[18px]"></div> */}
      </div>
      <div className="rounded-[12px] bg-white">
        <div className="py-4 px-6 border-b-[1px] border-[#E2E8F0]">
          Last Records
        </div>
        <RecordList />
      </div>
    </Layout>
  );
};

export default Dashboard;