import React from "react";
import { Dialog } from "@headlessui/react";

export default function NotesForm({ isOpen, onClose, onAddNote }) {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const titleMaxLength = 50;

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;

    if (newTitle.length <= titleMaxLength) {
      setTitle(newTitle);
    }
  };

  const handleAddNote = (e) => {
    const newNote = {
      id: Date.now(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    e.preventDefault();
    onAddNote(newNote);
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
      <Dialog.Panel
        as="div"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-6 bg-white rounded-xl flex flex-col gap-8 w-2/5"
      >
        <Dialog.Title as="h1" className="font-semibold text-center text-4xl">
          Tambah Notes Baru
        </Dialog.Title>
        <form onSubmit={handleAddNote} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="font-medium text-xl">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                className="border border-gray-400 rounded-lg py-2 px-4 text-lg"
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
                required
              />
              <p className="text-gray-400 text-sm">
                {titleMaxLength - title.length} characters left
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="body" className="font-medium text-xl">
                Body <span className="text-red-500">*</span>
              </label>
              <textarea
                className="border border-gray-400 rounded-lg py-2 px-4 text-lg"
                name="Body"
                id="body"
                placeholder="Body"
                rows="5"
                required
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-end gap-4">
            <button
              className="border border-blue-500 hover:border-blue-700 text-blue-500 bg-white font-bold py-2 px-4 rounded w-1/5"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/5"
              type="submit"
            >
              Simpan
            </button>
          </div>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
}
