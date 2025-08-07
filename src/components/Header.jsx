const Header = () => {
  return (
    <div className="header-container !w-[100vw] bg-black/85 text-white font-bold flex justify-end items-center p-5 shadow-lg shadow-blue-950">
      <ul className="flex justify-end items-center p-5">
        <li className="mx-5 cursor-pointer">ReactJs</li>
        <li className="mx-5 cursor-pointer">JavaScript</li>
      </ul>
    </div>
  );
};

export default Header;
