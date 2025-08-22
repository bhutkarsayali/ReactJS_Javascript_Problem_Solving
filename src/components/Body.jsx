import { Outlet } from "react-router";

import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex justify-start w-screen">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
