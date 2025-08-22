import { Outlet } from "react-router";

import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useState } from "react";

const Body = () => {
  const [activePage, setActivePage] = useState(null);
  return (
    <div className="flex justify-start w-screen">
      <Sidebar />
      <MainContainer activePage={activePage} />
    </div>
  );
};

export default Body;
