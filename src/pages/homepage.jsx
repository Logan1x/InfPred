import React from "react";

export default function homepage() {
  return (
    <div>
      <div className="lg:w-3/5 mx-auto h-page flex flex-col justify-center items-center px-3">
        <h1 className="font-bold text-2xl lg:text-5xl text-indigo-600">
          Welcome to
          <span className="border-b-4 border-blue-500 px-2 py-1 hover:bg-transparent">
            InfPred
          </span>
        </h1>
        <p className="text-xl text-center my-4 ">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Facere porro consequuntur
          maxime aspernatur ab ad repellendus exercitationem! Fugit
          exercitationem vero, ullam sunt minima assumenda doloribus,
          voluptatibus pariatur, autem nam molestiae!
        </p>
      </div>
      {/* colored div */}
      <div className="w-screen lg:h-page bg-gray-300 p-2 md:p-10">
        <div className="lg:w-3/5 mx-auto h-full flex flex-col justify-center items-center py-4 md:py-10 px-3 md:px-10 bg-purple-50 rounded-lg">
          <h1 className="font-bold text-2xl lg:text-5xl text-indigo-600 my-10">
            About
            <span className="border-b-4 border-blue-500 px-2 py-1 hover:bg-transparent">
              Influenza Virus
            </span>
          </h1>
          <div className="flex flex-wrap lg:flex-nowrap lg:space-x-6">
            <p className="text-xl  my-4 bg-white px-14 py-8 shadow rounded text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              obcaecati odit. Eveniet, unde possimus nobis non debitis illum
              beatae voluptate atque perspiciatis enim facere ipsum dolorem amet
              adipisci, maxime doloremque?
            </p>
            <p className="text-xl  my-4 bg-white px-14 py-8 shadow rounded text-center lg:text-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              obcaecati odit. Eveniet, unde possimus nobis non debitis illum
              beatae voluptate atque perspiciatis enim facere ipsum dolorem amet
              adipisci, maxime doloremque?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
