import AccordionPage from "./react_comps/AccordionPage";
import ChipsInputPage from "./react_comps/ChipsInputPage";

const MainContainer = ({ activePage }) => {
  return (
    <div className=" w-9/12 bg-gray-100 text-black p-5 ml-[calc(100vw/4)] !h-[calc(100%-104px)] fixed overflow-y-auto">
      MainContainer
      {activePage === "accordion" && <AccordionPage />}
      {activePage === "chips" && <ChipsInputPage />}
    </div>
  );
};

export default MainContainer;
