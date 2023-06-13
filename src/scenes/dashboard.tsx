import BarChart from "../components/dashboard/BarChart";
import Card from "../components/dashboard/Card";
import GeographyChart from "../components/dashboard/GeographyChart";
import LineChart from "../components/dashboard/LineChart";
import Header from "../components/Header";

function Dashboard() {
  return (
    <div className=" dark:bg-black dark:text-white">
      <Header title={"Dashboard"} subtitle={"WellCome to Dashboard"} />
      <Card />
      <div className="flex flex-wrap justify-around">
        <LineChart />
        <GeographyChart />
        <BarChart />
      </div>
    </div>
  );
}

export default Dashboard;
