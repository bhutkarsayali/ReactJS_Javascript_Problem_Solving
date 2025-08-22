import React, { useState } from "react";
import ReactIndexPage from "./react_comps/ReactIndexPage";
import JavaScriptIndexPage from "./js_comps/JavaScriptIndexPage.jsx";

const Sidebar = () => {
  const [isReactOpen, setIsReactOpen] = useState(false);
  const [isJsOpen, setIsJsOpen] = useState(false);
  const toggleReact = () => setIsReactOpen((prev) => !prev);
  const toggleJs = () => setIsJsOpen((prev) => !prev);

  return (
    <div className="w-3/12 bg-gray-800 text-white p-5 !h-[calc(100%-104px)] fixed overflow-y-auto">
      <div className="flex flex-col">
        <div className="react-wrapper">
          <div
            onClick={toggleReact}
            className="flex flex-row justify-between items-center shadow-inner bg-gray-500 shadow-black p-4 rounded-lg mb-5 cursor-pointer"
          >
            <span>React Problems</span>
            <span>{isReactOpen ? "🔼" : "🔽"}</span>
          </div>
          {isReactOpen && (
            <div>
              <ReactIndexPage hideTitle={true} />
            </div>
          )}
        </div>
        <div className="js-wrapper">
          <div
            onClick={toggleJs}
            className="flex flex-row justify-between items-center shadow-inner bg-gray-500 shadow-black p-4 rounded-lg cursor-pointer"
          >
            <span>javaScript Problems </span>
            <span>{isJsOpen ? "🔼" : "🔽"}</span>
          </div>
          {isJsOpen && (
            <div>
              <JavaScriptIndexPage hideTitle={true} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
