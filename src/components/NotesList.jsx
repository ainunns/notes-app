import React from "react";
import { Tab } from "@headlessui/react";
import NotesCard from "./NotesCard";

export default function NotesList({ data }) {
  return (
    <section className="mt-6">
      <Tab.Group as="div" className="w-11/12 mx-auto rounded">
        <Tab.List
          as="div"
          className="w-full grid grid-cols-2 bg-blue-500  rounded"
        >
          <Tab
            as="div"
            className="py-4 text-slate-100 text-center hover:bg-blue-700 cursor-pointer text-lg font-medium"
          >
            Active
          </Tab>
          <Tab
            as="div"
            className="py-4 text-slate-100 text-center hover:bg-blue-700 cursor-pointer text-lg font-medium"
          >
            Archives
          </Tab>
        </Tab.List>
        <Tab.Panels as="div" className="bg-blue-100">
          <Tab.Panel
            as="div"
            className="rounded px-4 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {data
              .filter((note) => !note.archived)
              .map((note) => (
                <NotesCard key={note.id} {...note} />
              ))}
          </Tab.Panel>
          <Tab.Panel
            as="div"
            className="rounded px-4 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {data
              .filter((note) => note.archived)
              .map((note) => (
                <NotesCard key={note.id} {...note} />
              ))}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}
