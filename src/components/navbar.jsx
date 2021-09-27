import React from "react";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <div className="h-24 border-2 border-bottom">
      <div className="flex justify-between h-full items-center w-4/5 mx-auto">
        <p className="text-2xl">
          <Link to="/">InfPred</Link>
        </p>
        <div className="flex space-x-4 text-lg">
          <p>
            <Link to="/predict">Predict</Link>
          </p>
          <p>
            <Link to="/about">About</Link>
          </p>
        </div>
        {/* <div className=" md:hidden">Hamburger</div> */}
      </div>
    </div>
  );
}
