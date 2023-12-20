import React from "react";
import NotesForm from "./NotesForm";

export default function NotesMenu({ data, setData }) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleAddNote = (newNote) => {
    const newNotes = [...data, newNote];
    setData(newNotes);
    closeDialog();
  };

  return (
    <section className="mt-16">
      <div className="w-11/12 mx-auto flex flex-col gap-4 md:flex-row justify-start md:justify-between items-start md:items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/5"
          onClick={openDialog}
        >
          New Note
        </button>
        <NotesForm
          isOpen={isDialogOpen}
          onClose={closeDialog}
          onAddNote={handleAddNote}
        />
        <div className="w-full flex flex-row justify-end items-center">
          <input
            className="border border-gray-400 rounded-l-lg w-full md:w-1/3 py-2 px-4"
            type="text"
            placeholder="Search notes..."
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
