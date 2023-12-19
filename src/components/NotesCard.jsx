import React from "react";

export default function NotesCard({ id, title, body }) {
  return (
    <div
      key={id}
      className="w-full rounded px-4 py-3 border border-black flex flex-col gap-3"
    >
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="font-medium text-lg text-justify">{body}</p>
    </div>
  );
}
