import { Outlet } from "react-router";

import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Body = () => {
  const [activePage, setActivePage] = useState(null);
  const clickedFromMenu = useSelector(
    (store) => store.reactissues.clickedIssueView
  );
  useEffect(() => {
    console.log("clickedFromMenu =", clickedFromMenu);
    setActivePage(clickedFromMenu);
  }, [clickedFromMenu]);
  useEffect(() => {
    console.log("clickedFromMenu activePage =", activePage);
  }, [activePage]);
  return (
    <div className="flex justify-start w-screen">
      <Sidebar />
      <MainContainer activePage={activePage} />
    </div>
  );
};

export default Body;
