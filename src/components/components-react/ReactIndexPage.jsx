import { Link } from "react-router";

const ReactIndexPage = () => {
  return (
    <div className="m-20">
      <ul>
        <Link to={"./accordion"}>
          <li className="!w-[50vw] bg-black/85 text-white font-bold flex justify-start items-center p-3 shadow-lg shadow-blue-950 m-3">
            1. Create Accordion
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default ReactIndexPage;
