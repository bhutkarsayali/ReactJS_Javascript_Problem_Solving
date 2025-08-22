import { Link } from "react-router";

const ReactIndexPage = ({ hideTitle }) => {
  return (
    <div className="">
      {!hideTitle && (
        <h1 className="font-bold text-xl uppercase">React Index</h1>
      )}
      <ul>
        {/* <Link to={"./accordion"}> */}
          <li className=" bg-black/85 text-white font-bold flex justify-start items-center p-3 shadow-lg shadow-blue-950 m-3">
            1. Create Accordion
          </li>
        {/* </Link> */}
      </ul>
    </div>
  );
};

export default ReactIndexPage;
