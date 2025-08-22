import AccordionPage from "./react_comps/AccordionPage";

const MainContainer = ({ activePage }) => {
  return (
    <div className=" w-9/12 bg-gray-100 text-black p-5 ml-[calc(100vw/4)]">
      MainContainer
      {activePage === "accordion" && <AccordionPage />}
    </div>
  );
};

export default MainContainer;
