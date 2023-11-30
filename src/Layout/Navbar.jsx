import React from "react";
import { PiNotebookFill } from "react-icons/pi";

export default function Navbar() {
  return (
    <header className="w-full flex flex-row justify-around py-4 bg-blue-500">
      <div className="flex flex-row gap-2 items-center">
        <PiNotebookFill size={36} className="text-white" />
        <h1 className="text-2xl font-bold text-white">Notes App</h1>
      </div>
    </header>
  );
}
