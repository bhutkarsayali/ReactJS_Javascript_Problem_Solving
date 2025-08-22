import { Link } from "react-router";
import reactProblemList from "../../utils/reactProblemList";
import { useState } from "react";

const ReactIndexPage = ({ hideTitle }) => {
  const [displayPage, setDisplayPage] = useState(null);
  const handleProblemClick = (tagname) => {
    console.log(tagname);
  };
  return (
    <div className="">
      {!hideTitle && (
        <h1 className="font-bold text-xl uppercase">React Index</h1>
      )}
      <ul>
        {reactProblemList.map((item) => {
          return (
            <li
              key={item.id}
              className=" bg-black/85 text-white font-bold flex justify-start items-center p-3 shadow-lg shadow-blue-950 m-3 cursor-pointer"
              onClick={() => handleProblemClick(item.tag)}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReactIndexPage;
