import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="h-80 w-[800px] flex justify-center items-center flex-col m-auto bg-red-400 text-white text-3xl absolute inset-0">
      <h1>Oops Something Went Wrong</h1>
      <h3>
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
