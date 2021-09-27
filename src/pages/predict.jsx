import React from "react";

export default function predict() {
  return (
    <div className="h-page flex flex-col justify-center items-center text-2xl">
      <h1 className="text-4xl mb-4 px-2 text-center">
        Enter a protein sequence to predict
      </h1>
      <form action="" className="px-2 flex flex-col items-center lg:w-2/4">
        <textarea
          className="py-4 px-2 my-2 w-full rounded-md shadow"
          type="text"
          placeholder="Enter a sequence"
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white mt-4 py-2 px-3 rounded hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
