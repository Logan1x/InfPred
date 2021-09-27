import React from "react";

export default function footer() {
  return (
    <div className="h-24">
      <div className="flex justify-between items-center h-full w-4/5 mx-auto">
        <p className="text-2xl">IIIT Delhi</p>
        <div className=" flex space-x-3 text-lg">
          <p>Raghava Lab</p>
          <p>Github</p>
        </div>
      </div>
    </div>
  );
}
