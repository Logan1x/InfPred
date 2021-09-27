import React from "react";

export default function about() {
  return (
    <div className="h-page flex flex-col justify-center items-center text-2xl text-center">
      <div className="w-3/4">
        <h1 className="text-4xl my-4">About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia amet
          deleniti esse, aliquid ducimus culpa, nihil earum laudantium, porro
          assumenda iusto saepe maiores perferendis excepturi sed adipisci
          libero nisi iste!
        </p>
      </div>
      <div>
        <h2 className="text-4xl my-4">Team</h2>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
