import { useState } from "react";
import "./App.css";
import SideBar from "./components/global/SideBar";
import TopBar from "./components/global/TopBar";
import Dashboard from "./scenes/dashboard";
import { Route, Routes } from "react-router-dom";
import Users from "./scenes/Users";
import Calender from "./scenes/Calander";
import Invoice from "./scenes/Invoice";
import Team from "./scenes/Team";
const App = (): JSX.Element => {
  const [childData, setChildData] = useState("");
  const handleChildData = (data: string) => {
    setChildData(data);
    // Do something with the received data
  };
  console.log(childData);

  return (
    <>
      <SideBar onDataReceived={handleChildData} />
      <div className={childData}>
        <TopBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manageTeam" element={<Team />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
