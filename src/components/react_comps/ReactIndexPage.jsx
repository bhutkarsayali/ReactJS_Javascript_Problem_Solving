import { useLocation, useNavigate } from "react-router";
import reactProblemList from "../../utils/reactProblemList";
import { useDispatch } from "react-redux";
import { addClickedIssueView } from "./../../store/reactProblemsSlice";
// import { useState } from "react";

const ReactIndexPage = ({ hideTitle }) => {
  // const [displayPage, setDisplayPage] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleProblemClick = (currentView) => {
    console.log(currentView);
    dispatch(addClickedIssueView(currentView));

    if (location.pathname === "/react") {
      switch (currentView) {
        case "accordion":
          navigate("/accordion");
          break;
        case "chips":
          navigate("/chips");
          break;
      }
    } else {
      console.log("User is not on /react — no redirect");
    }
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
