import { Link } from "react-router";

const Header = () => {
  return (
    <div className="header-container !w-[100vw] bg-black/85 text-white font-bold flex justify-end items-center p-5 shadow-lg shadow-blue-950">
      <ul className="flex justify-end items-center p-5">
        <Link to={"./"}>
          <li className="mx-5 cursor-pointer">Home</li>
        </Link>
        <Link to={"./react"}>
          <li className="mx-5 cursor-pointer">ReactJs</li>
        </Link>
        <Link to={"./javascript"}>
          <li className="mx-5 cursor-pointer">JavaScript</li>
        </Link>
        <Link to={"./questions"}>
          <li className="mx-5 cursor-pointer">Interview Questions</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
