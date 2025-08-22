import { Link, Outlet } from "react-router";
const JavaScriptIndexPage = ({ hideTitle }) => {
  return (
    <div className="">
      {!hideTitle && (
        <h1 className="font-bold text-xl uppercase">javaScript Index</h1>
      )}
      <ul>
        {/* <Link to={"./accordion"}> */}
          <li className=" bg-black/85 text-white font-bold flex justify-start items-center p-3 shadow-lg shadow-blue-950 m-3">
            1. JS Problem 
          </li>
        {/* </Link> */}
      </ul>
      <Outlet />
    </div>
  );
};
export default JavaScriptIndexPage;
