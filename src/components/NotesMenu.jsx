import React from "react";

export default function NotesMenu() {
  return (
    <section className="mt-16">
      <div className="w-11/12 mx-auto flex flex-row justify-between items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          New Note
        </button>
        <div className="flex flex-row justify-between items-center">
          <input
            className="border border-gray-400 rounded-lg w-full py-2 px-4"
            type="text"
            placeholder="Search notes..."
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
