import React from "react";

export default function NotesCard({ id, title, body, archived, createdAt }) {
  return (
    <div key={id} className="w-full border border-black">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}
