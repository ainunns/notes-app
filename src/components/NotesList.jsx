import React from "react";
import { Tab } from "@headlessui/react";

export default function NotesList() {
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
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}
