import React from "react";
import { showFormattedDate } from "../utils";
import { BsTrashFill } from "react-icons/bs";
import { BiSolidArchiveIn } from "react-icons/bi";
import { MdUnarchive } from "react-icons/md";

export default function NotesCard({
  id,
  title,
  body,
  archived,
  createdAt,
  setData,
}) {
  const handleDeleteNotes = () => {
    setData((data) => data.filter((note) => note.id !== id));
  };

  const handleArchiveNotes = () => {
    setData((data) =>
      data.map((note) => {
        if (note.id === id) {
          return { ...note, archived: !note.archived };
        }
        return note;
      })
    );
  };

  return (
    <div
      key={id}
      className="w-full rounded px-4 py-3 border border-black flex flex-col gap-3 justify-between"
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="text-md text-slate-700">
            {showFormattedDate(createdAt)}
          </p>
        </div>
        <p className="font-medium text-lg text-left">{body}</p>
      </div>
      <div className="grid grid-cols-2 w-full gap-4">
        <button
          className="bg-rose-500 hover:bg-rose-700 text-slate-100 font-bold py-2 px-4 rounded flex flex-row gap-2 items-center justify-center"
          onClick={handleDeleteNotes}
        >
          <BsTrashFill />
          Delete
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-slate-100 font-bold py-2 px-4 rounded flex flex-row gap-2 items-center justify-center"
          onClick={handleArchiveNotes}
        >
          {archived ? (
            <>
              <MdUnarchive />
              Unarchive
            </>
          ) : (
            <>
              <BiSolidArchiveIn />
              Archive
            </>
          )}
        </button>
      </div>
    </div>
  );
}
