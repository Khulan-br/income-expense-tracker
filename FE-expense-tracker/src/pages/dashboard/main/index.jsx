import Layout from "@/components/layout";
import Cards from "../cards";
import RecordList from "../recordlist";
import Chart from "../charts";
import { PieDashboardChart } from "../pieCharts";
import { useEffect, useState } from "react";
import axios from "axios";




const Dashboard = () => {

  const [recordData, setRecordData] = useState();
  const [currency, setCurrency] = useState('MNT');

  // useEffect(() => {
  //   const users = localStorage.getItem('user');
  //   const data = JSON.parse(users);
  //   const user_id = data.users.id;
  //   const currenryType = data.users.currency_type;
  //   setCurrency(currenryType);
  //   axios
  //     .get(`http://localhost:8000/record/:id/${user_id}`)
  //     .then((res) => setRecordData(res.data));
  // }, []);

  return ( 
    <Layout>
      {recordData && <Cards recordData={recordData} currency={currency} />}
      <Cards />
      <div className="grid grid-cols-2 gap-6 h-[284px]">
        <Chart className="bg-blue-400 rounded-[18px]"/>
        <PieDashboardChart />
      </div>
      <div className="rounded-[12px] bg-white">
        <div className="py-4 px-6 border-b-[1px] border-[#E2E8F0]">
          Last Records
        </div>
        {recordData && (
          <RecordList recordData={recordData} currency={currency} />
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;